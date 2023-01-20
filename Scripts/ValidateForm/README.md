## MaskForm
Requisitos
```html
<!-- JQUERY 3-->
<script src="https://code.jquery.com/jquery-3.6.3.slim.min.js" integrity="sha256-ZwqZIVdD3iXNyGHbSYdsmWP//UBokj2FHAxKuSBKDSo=" crossorigin="anonymous"></script>
<!-- INPUT MASK -->
<script src="https://cdnjs.cloudflare.com/ajax/libs/jquery.inputmask/5.0.7/jquery.inputmask.min.js" integrity="sha512-jTgBq4+dMYh73dquskmUFEgMY5mptcbqSw2rmhOZZSJjZbD2wMt0H5nhqWtleVkyBEjmzid5nyERPSNBafG4GQ==" crossorigin="anonymous" referrerpolicy="no-referrer"></script>
```

Syntax
```html
<form action="" method="get">
    <div>
        <input type="cpfcnpj" name="cpfcnpj" id="" class="form-control">
    </div>
    <div>
        <input type="cnpj" name="cnpj" id="" class="form-control">
    </div>
    <div>
        <input type="cpf" name="name" id="" class="form-control">
    </div>
    <div>
        <input type="cep" name="name" id="" class="form-control">
    </div>
    <div>
        <input type="tel" name="name" id="" class="form-control" target-error="ok">
    </div>
    <button type="submit">SEND</button>
</form>


<script src="./ValidateForm/validate_form.js"></script>
<script>
    let form = new ValidateForm('form')
    $('form').submit(event=>{
        console.log(event)
        if(event.result){
            let payload = event.result
            //REQUEST
        }
    })
</script>
```

<img src="https://github.com/feiticeiro-tec/fet-ui/blob/master/Scripts/ValidateForm/screen.jpg"/>
