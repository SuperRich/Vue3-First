﻿const template = '<div>{{title}}</div>';
const data = function data() {
    return {
        title: "Vue3"
    };
};


const App = {data,template}


Vue.createApp(App).mount("#hello");
