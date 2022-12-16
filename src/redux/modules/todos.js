const ADD_TODO = "ADD_TODO";
const GET_TODO_BY_ID = "GET_TODO_BY_ID";
const DELETE_TODO = "DELETE_TODO";
const TOGGLE_STATUS_TODO = "TOGGLE_STATUS_TODO";

const initialTodos = {
    todos: [
        {
            id: "1",
            title: "리액트",
            content: "리액트를 배워봅시다",
            isDone: false,
        },
    ],
    todo: {
        id: "0",
        title: "",
        content: "",
        isDone: false,
    },
};
export const addTodo = (payload) => {
    return {
        type: ADD_TODO,
        payload,
    };
};

export const deleteTodo = (payload) => {
    return {
        type: DELETE_TODO,
        payload,
    };
};
// Todo를 isDone를 변경하는 action creator
export const toggleStatusTodo = (payload) => {
    return {
        type: TOGGLE_STATUS_TODO,
        payload,
    };
};

// 상세 페이지에서 특정 Todo만 조회하는 action creator
export const getTodoByID = (payload) => {
    return {
        type: GET_TODO_BY_ID,
        payload,
    };
};

const todos = (state = initialTodos, action) => {
    console.log(action);
    switch (action.type) {
        case ADD_TODO:
            return {
                ...state,
                todos: [...state.todos, action.payload],
            };

        case DELETE_TODO:
            return {
                ...state,
                todos: state.todos.filter((todo) => todo.id !== action.payload),
            };

        case TOGGLE_STATUS_TODO:
            return {
                ...state,
                todos: state.todos.map((todo) => {
                    if (todo.id === action.payload) {
                        return {
                            ...todo,
                            isDone: !todo.isDone,
                        };
                    } else {
                        return todo;
                    }
                }),
            };
        case GET_TODO_BY_ID:
            return {
                ...state,
                todo: state.todos.find((todo) => {
                    return todo.id === action.payload;
                }),
            };
        default:
            return state;
    }
};

export default todos;
