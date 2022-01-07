const  panels = document.querySelectorAll('.panel')
/* querySelector allows us to select anything. Eg. 'p' for paragraph; 'h1' for h1; '.' for class or ID */
/* Here consider panels as an array. We can select panels item by panels[i]. Do for loop by panels.forEach() */
/* console.log can be used as print in log */

panels.forEach((panel) => {
    panel.addEventListener('click', () => {
        removeActiveClasses()
        panel.classList.add('active') /* Get the class active in css*/
    })
})

function removeActiveClasses(){
    panels.forEach(panel => {
        panel.classList.remove('active')
    })
}