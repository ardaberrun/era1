'use client';

import { useRouter } from 'next/navigation';
import { useState } from 'react';
import { toast, ToastContainer } from 'react-toastify';
import useAuth from '../hooks/useAuth';
import Header from '../components/Header';
import { TOASTER_CONFIG } from '../config';

export default function SignIn() {
    const router = useRouter();
    const { login, user } = useAuth();
    const [formData, setFormData] = useState({ email: '', password: '' });

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
            await login(formData);

            router.push('/');
          } catch (error) {
            toast.error('Giriş Başarısız', TOASTER_CONFIG);

            console.error(error);
          } finally {
            setFormData({ name: '', surname: '', email: '', password: '' });
          }
        setFormData({ email: '', password: '' });
    };

    return (
        <div className="page signin-page">
            <Header />
            <main className="main">
                <form className="card-form" onSubmit={handleSubmit}>
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
                    <button type="submit">Giriş Yap</button>
                </form>
            </main>
            <ToastContainer />
        </div>
    );
}
