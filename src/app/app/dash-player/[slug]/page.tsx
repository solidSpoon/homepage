'use client';
import { useEffect } from 'react';
import { useRouter } from 'next/navigation';

const DashPlayer = () => {
    const router = useRouter();

    useEffect(() => {
        router.replace('https://dash-player.solidspoon.xyz');
    }, [router]);

    return null;
}

export default DashPlayer;