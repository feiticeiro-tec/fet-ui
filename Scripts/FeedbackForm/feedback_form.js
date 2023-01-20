class FeedbackForm{
    clean = true
    text_list = false
    icon_invalid = '<i class="fa-solid fa-circle-exclamation"></i>'

    constructor(form,options={}){
        this.formulario = $(form)
        this.set_config(options)
    }
    set_config = (options)=>{
        /* DEFAULT */
        let clean = this.clean

        /* CONFIG */
        if(options.clean){clean = options.clean}
        if(options.icon_invalid){this.icon_invalid = options.icon_invalid}
        if(options.text_list){this.text_list = options.text_list}
        /* SET */
        if (clean){
            this.formulario.find('input').on('input',event=>{
                this.reset_validation(event.target)
            })
        }
    }
    reset_validation = (field,invalid=true,valid=true)=>{
        let element = $(field)
        if(invalid){element.removeClass('is-invalid')}
        if (valid){element.removeClass('is-valid')}
    }
    inputs = ()=>{
        return this.formulario.find('input:not([disabled]):not([readonly])')
    }
    set_field_invalid = (element,text)=>{
        let feedback = element.parent().find('.invalid-feedback')
        if (feedback.length == 0){
            element.parent().append('<span class="invalid-feedback"></span>')
            feedback = element.parent().find('.invalid-feedback')
        }
        if(this.text_list){
            feedback.html(`${this.icon_invalid} ${text[0]}`)
        }else{
            feedback.html(`${this.icon_invalid} ${text}`)
        }

        element.addClass('is-invalid')
    }
    set_field_valid = element =>{
        element.addClass('is-valid')
    }
    set_errors = (errors)=>{
        if(Object.entries(errors).length == 0 ){return}
        for(let field of this.inputs()){
            let element = $(field)
            this.style_required(element)
            element.removeClass('is-invalid')
            element.removeClass('is-valid')
            let error = errors[element.attr('target-error') || element.attr('name')]
            if (error){
                this.set_field_invalid(element,error)
            }else{
                this.set_field_valid(element)
            }
        }
    }
    style_required = element=>{}
}