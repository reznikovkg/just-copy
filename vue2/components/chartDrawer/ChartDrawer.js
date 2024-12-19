import { OrthogonalRouter } from "./OrthogonalRouter";
import { Point, Rectangle } from "./math";
import Vue from "vue";

export class ChartDrawer {
  constructor(width, height, scale, targetElem) {
    // Отступ соединений от фигур
    // Нужен для красоты, при расчётах путей, чтобы они шли на расстоянии от фигур
    this.figureMargin = 1;
    // Класс для расчётов путей
    this.router = new OrthogonalRouter(Array.from(
      { length: width },
      () => Array(height).fill(0)
    ));
    /** @type {Rectangle[]} */
    this.rectangles = Vue.observable([]);
    /** @type {{start: Point, end: Point, path: Point[]}[]} */
    this.arrows = Vue.observable([]);
    /** @type {Point|null} */
    this.startPoint = Vue.observable(null);
    /** @type {Point|null} */
    this.endPoint = Vue.observable(null);
    /** @type {Rectangle|null} */
    this.currentRectangle = Vue.observable(null);
    this.targetElem = targetElem;
    this.scale = scale;

    this.initEvents();
  }

  initEvents() {
    this.targetElem.addEventListener('mousedown', this.onMouseDown);
    this.targetElem.addEventListener('mousemove', this.onMouseMove);
    this.targetElem.addEventListener('mouseup', this.onMouseUp);
  }

  destroy() {
    this.targetElem.removeEventListener('mousedown', this.onMouseDown);
    this.targetElem.removeEventListener('mousemove', this.onMouseMove);
    this.targetElem.removeEventListener('mouseup', this.onMouseUp);
  }

  onMouseDown = (event) => {
    const pos = this.getMousePosition(event);

    const clickedRect = this.rectangles.find(rect => rect.isInside(pos));

    if (clickedRect && !this.startPoint) {
      this.startPoint = this.getNearestEdgePoint(clickedRect, pos, true);
    } else {
      this.currentRectangle = Rectangle.fromSize(pos, 0, 0);
    }
  }

  onMouseMove = (event) => {
    const pos = this.getMousePosition(event);
    if (this.currentRectangle) {
      this.currentRectangle.w = pos.x - this.currentRectangle.x;
      this.currentRectangle.h = pos.y - this.currentRectangle.y;
    } else if (this.startPoint) {
      this.endPoint = pos;
    }
  }

  onMouseUp = (event) => {
    if (this.currentRectangle) {
      this.currentRectangle = this.currentRectangle.abs();
      this.rectangles.push(this.currentRectangle);
      this.router.addObstacle(this.currentRectangle.addMargin(this.figureMargin));
    } else if (this.startPoint) {
      const origEnd = this.getMousePosition(event);
      const origStart = this.startPoint;

      // Проверка чтобы конец пути находился в фигуре
      const endRectangle = this.rectangles.find(rect => rect.isInside(origEnd));
      const startRectangle = this.rectangles.find(rect => rect.isInside(origStart));

      if (endRectangle && startRectangle) {
        let endPoint = this.getNearestEdgePoint(endRectangle, origEnd);
        let startPoint = this.getNearestEdgePoint(startRectangle, origStart);

        let path = this.router.aStar(startPoint, endPoint);
        if (path) {
          this.arrows.push({ start: origStart, end: origEnd, path: path });
        }
      }
    }

    this.startPoint = null;
    this.endPoint = null;
    this.currentRectangle = null;
  }

  /**
   * Возвращает координату ближайшей к точке стороны фигуры
   * @param {Rectangle} rect фигура
   * @param {Point} point точка
   * @param skipMargin не учитывать отступ
   * @returns {Point}
   */
  getNearestEdgePoint(rect, point, skipMargin = false) {
    // Отступ точки начала или конца, если точка будет в фигуре. То рассчитать путь не получится
    let defMargin = skipMargin ? 0 : this.figureMargin + 1;
    let { minX, maxX, minY, maxY } = rect.bb();
    const distances = [
      { x: minX - defMargin, y: Math.min(Math.max(point.y, minY), maxY) }, // Левая сторона
      { x: maxX + defMargin, y: Math.min(Math.max(point.y, minY), maxY) }, // Правая сторона
      { x: Math.min(Math.max(point.x, minX), maxX), y: minY - defMargin }, // Верхняя сторона
      { x: Math.min(Math.max(point.x, minX), maxX), y: maxY + defMargin }, // Нижняя сторона
    ];

    // Находим ближайшую точку
    let closestPoint = distances[0];
    let minDistance = Math.hypot(point.x - distances[0].x, point.y - distances[0].y);
    for (let i = 1; i < distances.length; i++) {
      const dist = Math.hypot(point.x - distances[i].x, point.y - distances[i].y);
      if (dist < minDistance) {
        closestPoint = distances[i];
        minDistance = dist;
      }
    }

    return new Point(closestPoint.x, closestPoint.y);
  }

  scaleDown(coordinate) {
    return Math.floor(coordinate / this.scale);
  }

  getMousePosition(event) {
    const rect = this.targetElem.getBoundingClientRect();
    return new Point(this.scaleDown(event.clientX - rect.left), this.scaleDown(event.clientY - rect.top));
  }
}