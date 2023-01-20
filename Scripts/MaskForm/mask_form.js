class MaskForm{
    constructor(form){
        this.formulario = $(form)
        this.set_masks()
    }
    inputs(){
        return this.formulario.find('input')
    }
    set_masks(){
        for(let element of this.inputs()){
            let field = $(element)
            let conf_mask = this.config[field.attr('type')]
            if(conf_mask!=undefined){
                conf_mask.call(field)
            }
        }
    }
    set_mask_cpfcnpj = element=>{
        let field = $(element)
        field.on('input',event=>{
            let field = $(event.target)
            let text = field.val().replace(/\D/g,'')
            if (text.length > 11){
                field.inputmask({regex:'\\d{2}\\.\\d{3}\\.\\d{3}\\/\\d{4}\\-\\d{2}'})    
            }else if (text.length == 11 && text.slice(-2) == '00'){
                field.inputmask({regex:'\\d{2}\\.\\d{3}\\.\\d{3}\\/\\d{4}\\-\\d{2}'})    
            }else{
                field.inputmask({regex:'\\d{3}\\.\\d{3}\\.\\d{3}\\-\\d{2}'})
            }
        })
        field.inputmask({regex:'\\d{3}\\.\\d{3}\\.\\d{3}\\-\\d{2}'})
        field.attr('placeholder','000.000.000-00')
    }
    set_mask_comun = (element)=>{
        let field = $(element)
        let set_config = this.config[field.attr('type')]
        console.log(this.config)
        console.log(set_config)
        if (set_config){
            if(set_config['placeholder'] && !field.attr('placeholder')){
                field.attr('placeholder',set_config['placeholder'])
            }
            field.inputmask({regex:set_config['regex']})
        }
    }
    config = {
        cnpj:{
            call:this.set_mask_comun,
            placeholder:'00.000.000/0001-00',
            regex:'\\d{2}\\.\\d{3}\\.\\d{3}\\/\\0\\0\\0\\1\\-\\d{2}'
        },
        cpf:{
            call:this.set_mask_comun,
            placeholder:'000.000.000-00',
            regex:'\\d{3}\\.\\d{3}\\.\\d{3}\\-\\d{2}'
            
        },
        cpfcnpj:{call:this.set_mask_cpfcnpj},
        tel:{
            call:this.set_mask_comun,
            placeholder:'(00) 00000-0000',
            regex:'\\(\\d{2}\\) \\d{5}\\-\\d{4}'
        },
        cep:{
            call:this.set_mask_comun,
            placeholder:'00000-00',
            regex:'\\d{5}-\\d{2}'
        }
    }
}
