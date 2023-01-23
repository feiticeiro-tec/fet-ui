## FeedbackForm
Requisitos
```html
<!-- BOOTSTRAP 5-->
<link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@5.2.3/dist/css/bootstrap.min.css" integrity="sha384-rbsA2VBKQhggwzxH7pPCaAqO46MgnOM80zW1RWuH61DGLwZJEdK2Kadq2F9CUG65" crossorigin="anonymous">

<!-- JQUERY 3-->
<script src="https://code.jquery.com/jquery-3.6.3.slim.min.js" integrity="sha256-ZwqZIVdD3iXNyGHbSYdsmWP//UBokj2FHAxKuSBKDSo=" crossorigin="anonymous"></script>
```
Optional
```html
<!-- FAS ICON-->
<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.2.1/css/all.min.css" integrity="sha512-MV7K8+y+gLIBoVD59lQIYicR65iaqukzvf/nwasF0nqhPay5w/9lJmVM2hMDcnK1OnMGCdVK+iQrJ7lzPJQd1w==" crossorigin="anonymous" referrerpolicy="no-referrer" />
<script src="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.2.1/js/all.min.js" integrity="sha512-rpLlll167T5LJHwp0waJCh3ZRf7pO6IT1+LZOhAyP6phAirwchClbTZV3iqL3BMrVxIYRbzGTpli4rfxsCK6Vw==" crossorigin="anonymous" referrerpolicy="no-referrer"></script>
```

Import
```html
<script src="https://cdn.statically.io/gh/feiticeiro-tec/fet-ui/ba399bbc/Scripts/FeedbackForm/feedback_form.js" integrity="sha384-NsXfcO5xqQESV4/I6ntypOMuexhZ67WB7q8oObEWo8oN5kPKgphEc47jPR+tsss/" crossorigin="anonymous"></script>
```


Syntax
```html
<form>
    <div>
        <input type="text" name="name" class="form-control">
    </div>
    <div>
        <input type="text" name="idade" class="form-control">
    </div>
</form>


<script src="./FeedbackForm/feedback_form.js"></script>
<script>
    let form = new FeedbackForm('form')
    form.set_errors({'name':'Mensagem de error'})
</script>
```
<img src='https://github.com/feiticeiro-tec/fet-ui/blob/master/Scripts/FeedbackForm/screen.jpg' />
