import React from 'react';
import { Formik } from 'formik';
// import loginFormSchema from './FormValidation/loginFormSchema';
// import { createField, Input } from '../../common/FormsControls/FormsControls';

const ProfileDataForm = props => {
	return (
		<div>
			<h1>FormData</h1>
			<Formik
				initialValues={{ fullName: '', contacts: '', lookingForAJobDescription: '', lookingForAJob: '' }}
				validateOnBlur
				onSubmit={(formData, { setSubmitting, setFieldError, setStatus }) => {
					props.profile(formData.fullName, formData.contacts, formData.lookingForAJobDescription, formData.lookingForAJob, setSubmitting, setFieldError, setStatus);

					setSubmitting(false);
				}}
				// validationSchema={loginFormSchema}
			>
				{({ values, errors, touched, handleChange, handleBlur, isValid, handleSubmit, dirty, status }) => (
					<div>
						<p>
							<label htmlFor={'fullName'}> Имя </label> <br />
							<input type={'text'} name={'fullName'} onChange={handleChange} onBlur={handleBlur} value={values.fullName} />
						</p>
						{touched.fullName && errors.fullName && <p>{errors.fullName}</p>}

						<p>
							<label htmlFor={'contacts'}> Контакты </label> <br />
							<input type={'text'} name={'contacts'} onChange={handleChange} onBlur={handleBlur} value={values.contacts} />
						</p>
						{touched.contacts && errors.contacts && <p>{errors.contacts}</p>}

						<p>
							<label htmlFor={'lookingForAJobDescription'}> My professional skills: </label> <br />
							<input type={'text'} name={'lookingForAJobDescription'} onChange={handleChange} onBlur={handleBlur} value={values.lookingForAJobDescription} />
						</p>
						{touched.lookingForAJobDescription && errors.lookingForAJobDescription && <p>{errors.lookingForAJobDescription}</p>}

						<p>
							<label htmlFor={'lookingForAJob'}> Looking for a job: </label> <br />
							<input type={'text'} name={'lookingForAJob'} onChange={handleChange} onBlur={handleBlur} value={values.lookingForAJob} />
						</p>
						{touched.lookingForAJob && errors.lookingForAJob && <p>{errors.lookingForAJob}</p>}
						<div>{status}</div>

						<button disabled={!isValid && !dirty} onClick={handleSubmit} type={'submit'}>
							Send
						</button>
					</div>
				)}
			</Formik>
		</div>

		// return (
		// 	<form>
		// 		<div>
		// 			<button onClick={() => {}}>save</button>
		// 		</div>

		// 		<div>
		// 			<b>Full name:</b> {createField('Full name', 'fullName', [], Input)}
		// 		</div>
		// 		<div>
		// 			<b>Looking for a job:</b> {profile.lookingForAJob ? 'yes' : 'no'}
		// 		</div>
		// 		{profile.lookingForAJob && (
		// 			<div>
		// 				<b>My professional skills:</b> {profile.lookingForAJobDescription}
		// 			</div>
		// 		)}
		// 		<div>
		// 			<b>About me:</b> {profile.aboutMe}
		// 		</div>
		// 		{/* <div>
		// 			<b>Contacts:</b>{' '}
		// 			{Object.keys(profile.contacts).map(key => {
		// 				return <Contact contactTitle={key} contactValue={profile.contacts[key]} />;
		// 			})}
		// 		</div> */}
		// 	</form>
	);
};

export default ProfileDataForm;
