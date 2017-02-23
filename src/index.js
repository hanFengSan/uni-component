import UniButton from "./components/uni-button"

const UniComponent = {
    UniButton
}

const install = function (Vue) {
    Object.keys(UniComponent).forEach((key) => {
        Vue.component(key, UniComponent[key]);
    });
};

// auto install
if (typeof window !== "undefined" && window.Vue) {
    install(window.Vue);
}

export default Object.assign(UniComponent, {install});;