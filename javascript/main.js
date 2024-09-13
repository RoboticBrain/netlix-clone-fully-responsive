const tabItems = document.querySelectorAll('.tab-item');
const tabContent = document.querySelectorAll('.tab-content-item');

function selectItem(e) {
    removeBorder();
    removeShowClass();
    this.classList.add('tab-border');
    selectedTab =  document.querySelector(`#${this.id}-content`);
    console.log(selectedTab);
    selectedTab.classList.add('show')


}
function removeBorder() {
    tabItems.forEach(item => item.classList.remove('tab-border'));
}
function removeShowClass() {
    tabContent.forEach(tab => tab.classList.remove('show'));
}
tabItems.forEach(item => item.addEventListener('click', selectItem));

