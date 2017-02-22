import Button from "./components/button"

const UniComponent = {
    Button
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

module.exports = Object.assign(UniComponent, {install});   // eslint-disable-line no-undef
