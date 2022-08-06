import React, { useContext, useState } from 'react'
import { UserContext } from '@/context/userContext';
import { StepContext } from '@/context/StepContext';

interface IDataForm{
    typeDoc: string;
    doc: string;
    telf: string;
    placa: string;
    acceptTerms: boolean;
}

const initialValueDataForm:IDataForm = {
    typeDoc: 'dni',
    doc: '',
    telf: '',
    placa: '',
    acceptTerms: false
}

const getUser = (id:string) => 
    fetch('https://jsonplaceholder.typicode.com/users/' + parseInt(id))

export default function SectionForm() {
  const [dataForm, setDataForm] = useState<IDataForm>(initialValueDataForm); 
  const [loadingSubmit, setLoadingSubmit] = useState(false); 
  const [error, setError] = useState(false); 
  const { user, setUser } = useContext(UserContext);
  const { setStep } = useContext(StepContext);

  const onChange = (data:object) =>
    setDataForm((prev) => ({...prev, ...data}))

  const onSubmit = async (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
    e.preventDefault()
    onChangeLoaderError(true, false)

    if(!isSuccessValidation()) {
        onChangeLoaderError(false, true)
        return
    }

    onChangeLoaderError(false, false)

    await getUser(dataForm.doc)
    .then((response) => response.json())
    .then((userData) => {
      if(userData.length === 0) return;
      setUser(userData);
      setStep(2);
    })
  }

  const onChangeLoaderError = (loading: boolean, error: boolean) => {
    setError(error)
    setLoadingSubmit(loading)
  } 

  const isSuccessValidation = (): boolean => {
    let successValidation = true;
    const validationGroupText = [undefined, '', null]; 
    const { acceptTerms, doc, placa, telf, typeDoc } = dataForm;

    if(validationGroupText.includes(doc)) successValidation = false;
    if(validationGroupText.includes(placa)) successValidation = false;
    if(validationGroupText.includes(telf)) successValidation = false;
    if(validationGroupText.includes(typeDoc)) successValidation = false;
    if(acceptTerms === false) successValidation = false;

    return successValidation
  }

  const renderMessage = () => {
    if(error && !loadingSubmit)
        return(
            <div className='message_error'>
                <span>Faltan campos por completar</span>
            </div>
        )
    else 
        return null
  }

  return (
    <section className="section_form">
      <div className="form_content">
        <h2>Déjanos tus datos</h2>
        {renderMessage()}
        <form>
            <div className='group_doc'>
                <select value={dataForm.typeDoc} onChange={(e) => onChange({typeDoc: e.target.value})}>
                    <option value='dni'>DNI</option>
                    <option value='asd'>otro</option>
                </select>
                <input type='text' placeholder='Nro. de doc' value={dataForm.doc} onChange={(e) => onChange({doc: e.target.value})}/>
            </div>
            <input type='tel' placeholder='Celular' value={dataForm.telf} onChange={(e) => onChange({telf: e.target.value})}/>
            <input type='text' placeholder='Placa' value={dataForm.placa} onChange={(e) => onChange({placa: e.target.value})}/>
            <div className='group_check'>
                <input type='checkbox' checked={dataForm.acceptTerms} onChange={(e) => onChange({acceptTerms: e.target.checked})}/>
                <p>
                    Acepto la &nbsp;
                    <a href="#" rel="noopener noreferrer">Política de Protecciòn de Datos Personales</a> 
                    &nbsp; y los &nbsp;
                    <a href="#" rel="noopener noreferrer">Términos y Condiciones.</a>
                </p>
            </div>
            <button type="submit" className={`${loadingSubmit ? 'loading' : ''}`} onClick={onSubmit} disabled={loadingSubmit}>
                COTÍZALO
            </button>
        </form>
      </div>
    </section>
  );
}
