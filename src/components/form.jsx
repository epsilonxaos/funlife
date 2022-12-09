import {useForm} from 'react-hook-form';
import { useTranslation } from 'react-i18next';
import Swal from 'sweetalert2'

const FormContact = () => {
	const { t } = useTranslation();
	const { register, formState: { errors }, handleSubmit, } = useForm();

	const onSubmits = (data) => {
		console.log(data);
	

		setTimeout(() => {
			
			Swal.fire({
				icon: 'success',
				title: 'Mensaje enviado',
				text: 'Pronto nos comunicaremos contigo!',
				showConfirmButton: false,
				timer: 2000,
				backdrop: false,
				target: "#formCont"
			});

		}, 3000);
	}

	return(
		<form onSubmit={handleSubmit(onSubmits)} id="formCont">
			<div className="row">
				<div className="col-12 col-md-6 mb-4 form-group">
					<label className="lb" htmlFor="nombre">{t('nombre')} <span className="text-danger">*</span></label>
					<input className={`form-control in ${errors.nombre ? 'is-invalid' : ''}`} type="text" {...register("nombre", {required: true, maxLength: 20})} />
				</div>
				<div className="col-12 col-md-6 mb-4 form-group">
					<label className="lb" htmlFor="nombre">{t('apellido')} <span className="text-danger">*</span></label>
					<input className={`form-control in ${errors.apellidos ? 'is-invalid' : ''}`} type="text" {...register("apellidos", {required: true })} />
				</div>
				<div className="col-12 mb-4 col-md-4 form-group">
					<label className="lb" htmlFor="email">{t('email')} <span className="text-danger">*</span></label>
					<input className={`form-control in ${errors.email ? 'is-invalid' : ''}`} type="email" {...register("email", {required: true})} />
				</div>
				<div className="col-12 mb-4 col-md-4 form-group">
					<label className="lb" htmlFor="telefono">{t('telefono')}</label>
					<input className="form-control in" type="number" {...register("telefono", { min: 10, max: 10 })} />
				</div>
				<div className="col-12 mb-4 col-md-4 form-group">
					<label className="lb" htmlFor="asunto">{t('compania')}</label>
					<input className="form-control in" type="text" {...register("compania")} />
				</div>
				<div className="col-12 mb-4 form-group">
					<label className="lb" htmlFor="comentarios">{t('comentarios')} <span className="text-danger">*</span></label>
					<textarea className="form-control tx" {...register("mensaje")} cols="30" rows="5"></textarea>
				</div>
				<div className="col-12 text-center">
					<input type="submit" className="btn btn-send" value={t('enviar')} />
				</div>
			</div>
		</form>
	)
}

export default FormContact;