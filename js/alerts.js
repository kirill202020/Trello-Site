const alertWin = document.querySelector('.alert'),
      alertText = document.querySelector('.alert-span')


function alert() {
    alertWin.style.display = 'flex'
    // alertText = `You need to fill name and description`
    setTimeout(() => {
        alertWin.style.display = 'none'
    }, 5000);
}