(() => {
    const refs = {
        openModalBtn: document.querySelector("[data-modal-open]"),
        closeModalBtn: document.querySelector("[data-modal-close]"),
        modal: document.querySelector("[data-modal]"),
    };

    refs.openModalBtn.addEventListener("click", toggleModal);
    refs.closeModalBtn.addEventListener("click", toggleModal);

    function toggleModal() {
        refs.modal.classList.toggle("is-hidden");
        document.body.classList.toggle("no-scroll");
    }
})();


const dataList = JSON.parse(localStorage.getItem("dataSession")) || [];

const saveData = (event) => {
    event.preventDefault();

    const data = {
        name: document.getElementById("strName").value,
        telephone: document.getElementById("strTel").value,
        date: document.getElementById("strDate").value,
        travel: document.getElementById("strIsland").value
    }

    dataList.push(data);
    localStorage.setItem("dataSession", JSON.stringify(dataList));
    console.log(data)
    event.target.reset();
}


document.querySelector("form").addEventListener("submit", saveData);