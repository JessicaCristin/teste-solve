class Product {

    constructor(name, value) {
        this.id = 1;
        this.arrayProduct = [];
    }

    addProduct() {
        let product = this.getValue();

        if (!this.validate(product)) {
            this.arrayProduct.push(product);
            this.id++;
            this.listAll();
        }

    }

    listAll() {

        let table = document.getElementById('tBody');
        table.innerText = '';
        for (let i = 0; i < this.arrayProduct.length; i++) {
            let tr = table.insertRow();

            let tdId = tr.insertCell();
            let tdName = tr.insertCell();
            let tdValor = tr.insertCell();
            let tdAction = tr.insertCell();

            let imgDelete = document.createElement('img');
            imgDelete.src = 'images/cart-x.svg';
            imgDelete.setAttribute("onclick", "product.removeProduct(" + this.arrayProduct[i].id + ")");

            tdId.innerText = this.arrayProduct[i].id;
            tdName.innerText = this.arrayProduct[i].name;
            tdValor.innerText = this.arrayProduct[i].value;

            tdAction.appendChild(imgDelete);
        }
    }

    validate(product) {
        let msg = '';
        let isEmpty = false;

        if (!product.name) {
            msg += 'Campo nome não pode estar vazio! \n'
        }
        if (!product.value) {
            msg += 'Campo valor não pode estar vazio! \n'
        }

        if (msg != '') {
            alert(msg);
            isEmpty = true;
        }

        return isEmpty;
    }

    getValue() {
        let product = {}

        product.id = this.id;
        product.name = document.getElementById('name').value;
        product.value = document.getElementById('value').value;

        return product;
    }

    removeProduct(id) {
        
        let table = document.getElementById('tBody');

        for(let i = 0; i < this.arrayProduct.length; i++){
            if(this.arrayProduct[i].id === id){
                this.arrayProduct.splice(i, 1);

                table.deleteRow(i);
            }
        }
    }
}

var product = new Product();