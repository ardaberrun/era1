'use client';

import { useRouter } from 'next/navigation';
import useAuth from '../hooks/useAuth';

export default function Header() {
  const router = useRouter();
  const { user, logout } = useAuth();

  return (
    <header className="page__header">
        <div className="page__header-left">
            <p className="logo" onClick={() => router.push('/')}>Era1</p>
        </div>
        <div className="page__header-right">
            {
                !user ?  
                (
                    <div className="page__header-right-anonymous">
                        <button className="button" onClick={() => router.push('/sign-up')}>Kayıt Ol</button>
                        <button className="button" onClick={() => router.push('/sign-in')}>Giriş Yap</button>
                    </div>
                ) : (
                    <div className="page__header-right-authenticated">
                        <p>Hoş geldin, {`${user.userData.name} ${ user.userData.surname }!`} </p>
                        <div className="button-container">
                            <button className="button" onClick={() => router.push('/profile')}>Profilim</button>
                            <button className="button" onClick={logout}>Çıkış Yap</button>
                        </div>
                    </div>
                )
            
            }
        </div>
    </header>
  );
}
