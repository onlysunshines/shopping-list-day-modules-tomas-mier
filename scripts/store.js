
import item from './item.js';

const items = []; 
const hideCheckedItems = false;


function findById(id) {
    let findThis = store.items.find(id);
    return findThis;
};

function addItem(name) {
    try {
        item.validateName(name);
        this.items.push(item.create(name));
    } catch (error) {
        console.log('Error');
    };
};

function findAndToggleChecked(id) {
    if (this.findById(id).checked === true){
        this.findById(id).checked = false;
    } else this.findById(id).checked = true
};

function findAndUpdateName(id, newName) {
    try {
        item.validateName(newName);
        findById(id).name = newName;
    } catch (error) {
        console.log(`Cannot update name: ${error.message}`);
    };
};

function findAndDelete(id) {
    items.find((item) => item.id === id);
    items.splice(items, 1);
};

export default {
    items,
    hideCheckedItems,
    findById,
    addItem,
    findAndUpdateName,
    findAndDelete,
    findAndToggleChecked
};

