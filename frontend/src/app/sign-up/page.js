'use client';

import { useRouter } from 'next/navigation';
import { useState } from 'react';
import { toast, ToastContainer } from 'react-toastify';
import useAuth from '../hooks/useAuth';
import UserService from '../services/UserService';
import Header from '../components/Header';
import { TOASTER_CONFIG } from '../config';

export default function SignUp() {
    const router = useRouter();
    const { user } = useAuth();
    const [formData, setFormData] = useState({ name: '', surname: '', email: '', password: '' });

    if (user) {
        router.push('/');

        return;
    }

    const handleChange = (e) => {
        const { name, value } = e.target;
    
        setFormData({...formData, [name]: value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        try {
            await UserService.signUp(formData);

            toast.success('Başarılı', TOASTER_CONFIG);
          } catch (error) {
            toast.error('Kayıt Başarısız', TOASTER_CONFIG);

            console.error(error);
          } finally {
            setFormData({ name: '', surname: '', email: '', password: '' });
          }
    };

    return (
        <div className="page signup-page">
        <Header />
        <main className="main">
            <form className="card-form" onSubmit={handleSubmit}>
                <div className="form-group">
                    <label htmlFor="name">İsim</label>
                    <input
                        type="text"
                        id="name"
                        name="name"
                        placeholder="Name"
                        value={formData.name}
                        onChange={handleChange}
                    />
                </div>
                <div className="form-group">
                    <label htmlFor="surname">Soyisim</label>
                    <input
                        type="text"
                        id="surname"
                        name="surname"
                        placeholder="Surname"
                        value={formData.surname}
                        onChange={handleChange}
                        required
                    />
                </div>
                <div className="form-group">
                    <label htmlFor="email">Email</label>
                    <input
                        type="email"
                        id="email"
                        name="email"
                        placeholder="Email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                    />
                </div>
                <div className="form-group">
                    <label htmlFor="password">Şifre</label>
                    <input
                        type="password"
                        id="password"
                        name="password"
                        placeholder="Password"
                        value={formData.password}
                        onChange={handleChange}
                        required
                    />
                </div>
                <button type="submit">Kayıt Ol</button>
            </form>
        </main>
        <ToastContainer />
        </div>
    );
}
