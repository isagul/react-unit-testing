export const findByClassName = (component, classname) => {
    const wrapper = component.find(`.${classname}`);
    return wrapper;
}