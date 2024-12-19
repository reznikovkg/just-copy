export class Point {
  constructor(x, y) {
    this.x = x;
    this.y = y;
  }

  div(scale) {
    return new Point(
      Math.floor(this.x / scale),
      Math.floor(this.y / scale)
    );
  }

  eq(point) {
    return this.x === point.x && this.y === point.y;
  }

  toString() {
    return `${this.x},${this.y}`;
  }
}

export class Rectangle {
  x;
  y;
  w;
  h;

  static fromSize(point, w, h) {
    let rect = new Rectangle();
    rect.x = point.x;
    rect.y = point.y;
    rect.w = w;
    rect.h = h;
    return rect;
  }

  static fromPoints(x, y, w, h) {
    let rect = new Rectangle();
    rect.x = x;
    rect.y = y;
    rect.w = w;
    rect.h = h;
    return rect;
  }

  abs() {
    let newRect = Rectangle.fromPoints(this.x, this.y, this.w, this.h);
    if(newRect.w < 0) {
      newRect.x += newRect.w;
      newRect.w *= -1;
    }
    if(newRect.h < 0) {
      newRect.y += newRect.h;
      newRect.h *= -1;
    }
    return newRect;
  }

  isInside(point) {
    return point.x >= this.x && point.x <= this.x + this.w &&
      point.y >= this.y && point.y <= this.y + this.h
  }

  addMargin(margin) {
    return Rectangle.fromPoints(
      this.x - margin,
      this.y - margin,
      this.w + 1 + margin * 2,
      this.h + 1 + margin * 2,
    )
  }

  width() {
    return this.w;
  }

  height() {
    return this.h;
  }

  bb() {
    return { minX: this.x, maxX: this.x + this.w, minY: this.y, maxY: this.y + this.h };
  }
}