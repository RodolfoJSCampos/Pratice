window.onscroll = function () { scrollFunction() };
const dropSourceBarList = document.querySelectorAll('.dropSourceBar');
const dropSourceList = document.querySelectorAll('.dropSource');
const dropSourceText = document.querySelectorAll('.dropSourceText');
const btnAddEquipment = document.querySelectorAll('.equipImgContainer');
const classPickerBarJs = document.querySelectorAll('.classPickerBar');
const attributePickerJs = document.querySelectorAll('.attributePicker');
const dropSourceBarById = document.getElementById("dropSourceBarId");
const classPickerBarById = document.getElementById("classPickerBarId");
var modalClose = document.getElementsByClassName("close")[0];
var bodyTag = document.getElementsByTagName("body")[0];
var modal = document.getElementById("equipmentModal");
var dungeonSourceClicked, raideSourceClicked, pvpSourceClicked, professionSourceClicked = false;

$(document).ready(function () {

    $('#dropSourceDungeonId').click(function () {
        if (dungeonSourceClicked == true) {
            dungeonSourceClicked = false;
            document.getElementById("dropSourceDungeonId").style.border = "0px";
            document.getElementById("dropSourceDungeonId").style.filter = "grayscale(100%)";
            document.getElementById("dropSourceTextDungeonId").style.color = "grey";
        } else {
            dungeonSourceClicked = true;
            document.getElementById("dropSourceDungeonId").style.border = "5px solid";
            document.getElementById("dropSourceDungeonId").style.borderColor = "white";
            document.getElementById("dropSourceDungeonId").style.borderStyle = "ridge";
            document.getElementById("dropSourceDungeonId").style.filter = "grayscale(0%)";
            document.getElementById("dropSourceTextDungeonId").style.color = "white";
        }
    });

    $('#dropSourceRaideId').click(function () {
        if (raideSourceClicked == true) {
            raideSourceClicked = false;
            document.getElementById("dropSourceRaideId").style.border = "0px";
            document.getElementById("dropSourceRaideId").style.filter = "grayscale(100%)";
            document.getElementById("dropSourceTextRaideId").style.color = "grey";
        } else {
            raideSourceClicked = true;
            document.getElementById("dropSourceRaideId").style.border = "5px solid";
            document.getElementById("dropSourceRaideId").style.borderColor = "white";
            document.getElementById("dropSourceRaideId").style.borderStyle = "ridge";
            document.getElementById("dropSourceRaideId").style.filter = "grayscale(0%)";
            document.getElementById("dropSourceTextRaideId").style.color = "white";
        }
    });

    $('#dropSourcePvpId').click(function () {
        if (pvpSourceClicked == true) {
            pvpSourceClicked = false;
            document.getElementById("dropSourcePvpId").style.border = "0px";
            document.getElementById("dropSourcePvpId").style.filter = "grayscale(100%)";
            document.getElementById("dropSourceTextPvpId").style.color = "grey";
        } else {
            pvpSourceClicked = true;
            document.getElementById("dropSourcePvpId").style.border = "5px solid";
            document.getElementById("dropSourcePvpId").style.borderColor = "white";
            document.getElementById("dropSourcePvpId").style.borderStyle = "ridge";
            document.getElementById("dropSourcePvpId").style.filter = "grayscale(0%)";
            document.getElementById("dropSourceTextPvpId").style.color = "white";
        }
    });

    $('#dropSourceProfessionId').click(function () {
        if (professionSourceClicked == true) {
            professionSourceClicked = false;
            document.getElementById("dropSourceProfessionId").style.border = "0px";
            document.getElementById("dropSourceProfessionId").style.filter = "grayscale(100%)";
            document.getElementById("dropSourceTextProfessionId").style.color = "grey";
        } else {
            professionSourceClicked = true;
            document.getElementById("dropSourceProfessionId").style.border = "5px solid";
            document.getElementById("dropSourceProfessionId").style.borderColor = "white";
            document.getElementById("dropSourceProfessionId").style.borderStyle = "ridge";
            document.getElementById("dropSourceProfessionId").style.filter = "grayscale(0%)";
            document.getElementById("dropSourceTextProfessionId").style.color = "white";
        }
    });

    $(btnAddEquipment).click(function () {
        modal.style.display = "block";
        bodyTag.style.overflowY = "hidden";
        bodyTag.style.marginRight = "18px";
        dropSourceBarById.style.right = "8px";
        dropSourceBarById.style.transition = "0s";
        classPickerBarById.style.right = "8px";
        classPickerBarById.style.transition = "0s";
        //MODAL TEST START
        document.getElementById("innerModal").innerText = DATA.dungeonEquipments[12].dungeon;
        document.getElementById("innerModal").innerText += ". __________________________________________________ .";
        document.getElementById("innerModal").innerText += DATA.dungeonEquipments[12].boss;
        document.getElementById("innerModal").innerText += ". __________________________________________________ .";
        document.getElementById("innerModal").innerText += DATA.dungeonEquipments[12].name;
        document.getElementById("innerModal").innerText += ". __________________________________________________ .";
        document.getElementById("innerModal").innerText += DATA.dungeonEquipments[12].slot;
        document.getElementById("innerModal").innerText += ". __________________________________________________ .";
        document.getElementById("innerModal").innerText += DATA.dungeonEquipments[12].type;
        document.getElementById("innerModal").innerText += ". __________________________________________________ .";
        document.getElementById("innerModal").innerText += DATA.dungeonEquipments[12].bonus.Use;
        //MODAL TEST END
    });

    $(modalClose).click(function () {
        modal.style.display = "none";
        bodyTag.style.overflowY = "auto";
        bodyTag.style.marginRight = "0px";
        dropSourceBarById.style.right = "0px";
        classPickerBarById.style.right = "0px";
        setTimeout(function () {
            dropSourceBarById.style.transition = "0.4s";
            classPickerBarById.style.transition = "0.4s";
        }, 400);
    });

    $(window).click(function (event) {
        if (event.target == modal) {
            modal.style.display = "none";
            bodyTag.style.overflowY = "auto";
            bodyTag.style.marginRight = "0px";
            dropSourceBarById.style.right = "0px";
            classPickerBarById.style.right = "0px";
            setTimeout(function () {
                dropSourceBarById.style.transition = "0.4s";
                classPickerBarById.style.transition = "0.4s";
            }, 400);
        }
    });
});

function scrollFunction() {
    if (document.body.scrollTop > 50 || document.documentElement.scrollTop > 50) {
        dropSourceBarList.forEach(dropSourceBar => {
            dropSourceBar.style.height = "70px";
        });

        classPickerBarJs.forEach(classPickerBar => {
            classPickerBar.style.height = "40px";
        });

        dropSourceList.forEach(dropSource => {
            dropSource.classList.remove('dropSource', 'dropSourceSmall');
            dropSource.classList.add('dropSourceSmall');
        });

        classPickerBarJs.forEach(classPickerBar => {
            classPickerBar.style.height = "40px";
        });

        dropSourceText.forEach(dropSourceText => {
            dropSourceText.style.top = "42.5%";
        });

        classPickerBarJs.forEach(classPickerBar => {
            classPickerBar.style.top = "70px";
        });

        attributePickerJs.forEach(attributePicker => {
            attributePicker.style.marginTop = "0px";
        });

    } else {
        dropSourceBarList.forEach(dropSourceBar => {
            dropSourceBar.style.height = "205px";
        });

        classPickerBarJs.forEach(classPickerBar => {
            classPickerBar.style.height = "80px";
        });

        dropSourceList.forEach(dropSource => {
            dropSource.classList.remove('dropSource', 'dropSourceSmall');
            dropSource.classList.add('dropSource');
        });

        dropSourceText.forEach(dropSourceText => {
            dropSourceText.style.top = "42.5%";
        });

        classPickerBarJs.forEach(classPickerBar => {
            classPickerBar.style.top = "205px";
        });

        attributePickerJs.forEach(attributePicker => {
            attributePicker.style.marginTop = "25px";
        });
    }
}
