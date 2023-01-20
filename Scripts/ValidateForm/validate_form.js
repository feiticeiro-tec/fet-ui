class ValidateForm{
    message_required = 'Campo Obrigatorio!'
    
    constructor(form){
        this.formulario = $(form)
        this.formulario.submit(event=>{
            event.preventDefault()
            if(
                !this.validate_required(event) || 
                !this.validate_min(event) ||
                !this.validate_field(event)
                ){
                return false
            }
            return new FormData(event.target)
        })
    }
    validate_required = event=>{
        for(let element of $(event.target).find('input[required]')){
            if (element.value == ''){
                element.setCustomValidity(this.message_required)
                element.reportValidity()
                return false
            }
        }
        return true
    }
    validate_min = event =>{
        for(let element of $(event.target).find('input[maxlength]')){
            if (element.value.length < parseFloat(element.attributes.maxlength.value)){
                element.setCustomValidity(`Minimo de caracteres ${element.attributes.maxlength.value}!`)
                element.reportValidity()
                return false
            }
        }
        return true
    }
    validate_field = event=>{
        for(let element of $(event.target).find('input:not([disabled])')){
            if (element.value == ''){continue}
            let check = this.config[$(element).attr('type')]
            if (check != undefined){
                let validator = check.call
                if (!validator(element.value)){
                    element.setCustomValidity(check.message)
                    element.reportValidity()
                    return false
                }
            }
        }
        return true
    }
    validate_cnpj = value=>{
        if(value.match(/\d{2}\.\d{3}\.\d{3}\/[0][0][0][1]\-\d{2}/g)){
            let cnpj = value.replace(/[^\d]+/g,'');

            if(cnpj == '') return false;

            if (cnpj.length != 14)
                return false;

            // Elimina CNPJs invalidos conhecidos
            if (cnpj == "00000000000000" || 
                cnpj == "11111111111111" || 
                cnpj == "22222222222222" || 
                cnpj == "33333333333333" || 
                cnpj == "44444444444444" || 
                cnpj == "55555555555555" || 
                cnpj == "66666666666666" || 
                cnpj == "77777777777777" || 
                cnpj == "88888888888888" || 
                cnpj == "99999999999999")
                return false;
                
            // Valida DVs
            tamanho = cnpj.length - 2
            numeros = cnpj.substring(0,tamanho);
            digitos = cnpj.substring(tamanho);
            soma = 0;
            pos = tamanho - 7;
            for (let i = tamanho; i >= 1; i--) {
            soma += numeros.charAt(tamanho - i) * pos--;
            if (pos < 2)
                    pos = 9;
            }
            resultado = soma % 11 < 2 ? 0 : 11 - soma % 11;
            if (resultado != digitos.charAt(0))
                return false;
                
            tamanho = tamanho + 1;
            numeros = cnpj.substring(0,tamanho);
            soma = 0;
            pos = tamanho - 7;
            for (i = tamanho; i >= 1; i--) {
            soma += numeros.charAt(tamanho - i) * pos--;
            if (pos < 2)
                    pos = 9;
            }
            resultado = soma % 11 < 2 ? 0 : 11 - soma % 11;
            if (resultado != digitos.charAt(1))
                return false;
                
            return true;
        }
        return false
    }
    validate_cpf = value=>{
        if(value.match(/\d{3}\.\d{3}\.\d{3}\-\d{2}/g)){
            let Soma;
            let Resto;
            Soma = 0;
            let cpf = value.replace(/[^\d]+/g,'');
            if (cpf == "00000000000") return false;
    
            for (let i=1; i<=9; i++) Soma = Soma + parseInt(cpf.substring(i-1, i)) * (11 - i);
            Resto = (Soma * 10) % 11;
            if ((Resto == 10) || (Resto == 11))  Resto = 0;
            if (Resto != parseInt(cpf.substring(9, 10)) ) return false;
    
            Soma = 0;
            for (let i = 1; i <= 10; i++) Soma = Soma + parseInt(cpf.substring(i-1, i)) * (12 - i);
            Resto = (Soma * 10) % 11;
    
            if ((Resto == 10) || (Resto == 11))  Resto = 0;
            if (Resto != parseInt(cpf.substring(10, 11) ) ) return false;
            return true;
        }

        return false
    }
    validate_telefone = value=>{
        if(value.match(/\(\d{2}\) \d{4}\-\d{4}/g) || alue.match(/\(\d{2}\) \d{5}\-\d{4}/g)){
            return true
        }
        return false
    }
    validate_cep = value=>{
        if(value.match(/\d{5}\-\d{3}/g)){return true}
        return false
    }
    validate_email = value=>{
        if(value.match(/(\W|\w)+[@](\W|\w)+\.(\W|\w)+/g)){return true}
        return false
    }
    config = {
        cnpj:{
            message:"CNPJ Invalido!",
            call: this.validate_cnpj
        },
        cpf:{
            message:"CPF Invalido!",
            call: this.validate_cpf
        },
        cpfcnpj:{
            message:"CPF / CNPJ Invalido!",
            call:value=>{
                if(this.validate_cpf(value) || this.validate_cnpj(value)){return true}
                return false
            }
        },
        tel:{
            message:"Telefone Invalido!",
            call:this.validate_telefone
        },
        cep:{
            message:"CEP Invalido!",
            call:this.validate_cep
        },
        email:{
            message:"E-mail Invalido!",
            call:this.validate_email
        }
    }
}