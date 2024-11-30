import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default {
  namespaced: true,
  state: {
    // Изначальный объект
    initialObject: {
      test1: "test1",
      test2: "test2",
      test3: "test3",
      test4: {
        test1: "test1",
        test2: "test2",
        test3: "test3",
        test4: {
          test1: "test1",
          test2: "test2",
          test3: "test3",
          test4: "test4"
        }
      },
      test5: {
        test1: "test1",
        test2: "test2",
        test3: "test3",
        test4: {
          test1: "test1",
          test2: "test2",
          test3: "test3",
          test4: "test4"
        }
      },
      test8: ["test1", "test2", "test3"],
      test9: ["test1", "test2", "test3"],
      test10: ["test1", "test2", "test3"],
      test11: [{test1: "test1"}, {test2: "test2"}, {test3: "test3"}, {test4: "test4"}],
      test12: [{test1: "test1"}],
      test13: true,
      test14: false,
      test15: true,
    },
    // Новый объект
    newObject: {
      test1: "test1",
      test2: "test22",
      test4: {
        test1: "test1",
        test2: "test22",
        test4: {
          test1: "test1",
          test2: "test"
        }
      },
      test6: "test6",
      test7: {
        test1: "test1",
        test2: "test2",
        test3: "test3",
        test4: {
          test1: "test1",
          test2: "test2",
          test3: "test3",
          test4: "test4"
        }
      },
      test8: ["test1", "test2", "test3"],
      test9: ["test1", "test3"],
      test10: ["test1", "test22", "test3"],
      test11: [{test1: "test1"}, {test2: "test22"}, {test4: "test4"}, {test5: "test5"}],
      test12: "test12",
      test13: false,
      test14: true,
      test15: true,
    },
    excludeFields: ["test15"],
  },
}
