import profileReducer, {addPostActionCreator, deletePost} from "./profileReducer";

let state = {
    posts: [
        {id: 1, postText: "Привет! Это мой первый пост в этой соц-сети", likesCount: 0},
        {id: 2, postText: "Вау! Эта соц-сеть работает!!", likesCount: 10},
    ],
}

test('posts length should be incremented', () => {
    //1. Test data
    let action = addPostActionCreator('post added');
    //2.action
    let newState = profileReducer(state, action);
    //3. Expectation
    expect(newState.posts.length).toBe(3)
})

test('new post text should be like postBody', () => {
    //1. Test data
    let action = deletePost(1);
    //2.action
    let newState = profileReducer(state, action);
    //3. Expectation
    expect(newState.posts.length).toBe(1);
})

test('if postId is incorrect do not change length', () => {
    //1. Test data
    let action = deletePost(10000);
    //2.action
    let newState = profileReducer(state, action);
    //3. Expectation
    expect(newState.posts.length).toBe(2);
})