import { useForm } from 'react-hook-form';

export default function Register() {
    const {
        register,
        handleSubmit,
        watch,
        formState: { errors },
    } = useForm();

    const onSubmit = (data) => {
        console.log(data);
    };

    return (
        <section className="register-page">
            <div>
                <h1 className="register-title">Kicks <span className="register-title-span">&</span> Cop</h1>
                <h2 className="register-subtitle">Créer un compte</h2>

                <form className="register-form" onSubmit={handleSubmit(onSubmit)}>
                    <div className="form-field">
                        <label htmlFor="email">Adresse e-mail<span className="form-field-required">*</span></label>
                        <input type="email" id="email" placeholder="maxime@example.com" {...register('email', {
                                required: 'L\'adresse e-mail est requise',
                                pattern: {
                                    value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                                    message: 'Adresse e-mail invalide'
                                },
                            }
                        )} />
                        {errors.email && <span className="form-error">{errors.email.message}</span>}
                    </div>

                    <div className="form-field">
                        <label htmlFor="password">Mot de passe<span className="form-field-required">*</span></label>
                        <input
                            type="password"
                            id="password"
                            placeholder="8 caractères minimum"
                            {...register('password', {
                                required: 'Le mot de passe est requis',
                                minLength: {
                                    value: 8,
                                    message: 'Le mot de passe doit contenir au moins 8 caractères',
                                },
                            })}
                        />
                        {errors.password && <span className="form-error">{errors.password.message}</span>}
                    </div>

                    <div className="form-field">
                        <label htmlFor="confirmPassword">Confirmer le mot de passe<span className="form-field-required">*</span></label>
                        <input
                            type="password"
                            id="confirmPassword"
                            placeholder="Confirmation du mot de passe"
                            {...register('confirmPassword', {
                                required: 'La confirmation du mot de passe est requise',
                                validate: (value) =>
                                    value === watch('password') || 'Les mots de passe ne correspondent pas',
                            })}
                        />
                        {errors.confirmPassword && <span className="form-error">{errors.confirmPassword.message}</span>}
                    </div>

                    <button className="register-button" type="submit">S'inscrire <span>→</span></button>
                    <button className="register-button" type="button"><span>←</span>Se connecter</button>
                </form>
            </div>
        </section>
    );
}