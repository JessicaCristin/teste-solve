class Product {

    constructor() {
        this.id = 1;
        this.arrayProduct = [];
    }

    addProduct() {
        let product = this.getValue();

        if ((!this.validate(product)) && (this.arrayProduct.length <= 9)) {
            this.arrayProduct.push(product);
            this.id++;
            this.listAll();
            document.getElementById('endsProgram').disabled = false;
            document.getElementById('name').value = '';
            document.getElementById('value').value = '';
        }
    }

    sumValue() {
        let sumValue = 0;
        for (let i = 0; i < this.arrayProduct.length; i++) {
            sumValue += Number(this.arrayProduct[i].value);
        }
        return sumValue;
    }

    endsProgram() {
        let sumValue = this.sumValue();
    
        let table = document.getElementById('tBody');
        let tr = table.insertRow();

        let label = tr.insertCell();
        let tdValueTotal = tr.insertCell();

        label.innerText = 'Valor Total:';
        tdValueTotal.innerText = sumValue;

        document.getElementById('addProduct').disabled = true;
        document.getElementById('endsProgram').disabled = true;
        document.getElementById('remove0').src = '';

        let r100 = sumValue / 100;
        let r50 = ((sumValue % 100) / 50);
        let r20 = (((sumValue % 100) % 50) / 20);
        let r10 = ((((sumValue % 100) % 50) % 20) / 10);
        let r5 = (((((sumValue % 100) % 50) % 20) % 10) / 5);
        let r2 = ((((((sumValue % 100) % 50) % 20) % 10) % 5) / 2);
        let r1 = (((((((sumValue % 100) % 50) % 20) % 10) % 5) % 2) / 1);

        var arrayMoney = [parseInt(r100), parseInt(r50), parseInt(r20), parseInt(r10), parseInt(r5), parseInt(r2), parseInt(r1)];
        var arrayValueMoney = ["R$ 100", "R$ 50", "R$ 20", "R$ 10", "R$ 5", "R$ 2", "R$ 1"]
        let tableMoney = document.getElementById('tBodyMoney');

        for (let i = 0; i < arrayMoney.length; i++) {
            let trMoney = tableMoney.insertRow();

            let tdValue = trMoney.insertCell();
            let tdQtd = trMoney.insertCell();

            tdValue.innerText = arrayValueMoney[i];
            tdQtd.innerText = arrayMoney[i];
        }

    }

    listAll() {

        let table = document.getElementById('tBody');
        table.innerText = '';
        for (let i = 0; i < this.arrayProduct.length; i++) {
            let tr = table.insertRow();

            let tdId = tr.insertCell();
            let tdName = tr.insertCell();
            let tdValue = tr.insertCell();
            let tdAction = tr.insertCell();

            let imgDelete = document.createElement('img');
            imgDelete.src = 'images/cart-x.svg';
            imgDelete.id = "remove" + i.toString();
            imgDelete.setAttribute("onclick", "product.removeProduct(" + this.arrayProduct[i].id + ")");

            tdId.innerText = this.arrayProduct[i].id;
            tdName.innerText = this.arrayProduct[i].name;
            tdValue.innerText = this.arrayProduct[i].value;

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

        for (let i = 0; i < this.arrayProduct.length; i++) {
            if (this.arrayProduct[i].id === id) {
                this.arrayProduct.splice(i, 1);

                table.deleteRow(i);
            }
        }
    }
}

var product = new Product();

