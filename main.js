console.log('hello')

document.querySelector('#s2').addEventListener('click', () => {
    document.getElementById("sectionTwo").scrollIntoView({behavior: 'smooth', block: 'end'});
  
})