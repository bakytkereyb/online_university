import Link from 'next/link';
import Image from 'next/image';
import { Flex } from "antd";
import Heading from "@/components/UI/Heading";
import { ROUTES } from "@/config/pages.config";
import './Logo.css';

interface LogoProps {
    size?: 'small' | 'medium' | 'large';
    showText?: boolean;
    className?: string;
}

export default function Logo({ size = 'medium', showText = true, className = '' }: LogoProps) {
    const sizes = {
        small: { width: 28, height: 28, fontSize: '18px' },
        medium: { width: 40, height: 40, fontSize: '24px' },
        large: { width: 48, height: 48, fontSize: '28px' }
    };

    const currentSize = sizes[size];

    return (
        <Link href={ROUTES.HOME} className={`logo ${className}`}>
            <Flex align="center" justify="center" gap={8}>
                <Image
                    src="/globe.svg"
                    alt="EDURA logo"
                    width={currentSize.width}
                    height={currentSize.height}
                    priority
                />
                {showText && (
                    <Heading level="h2" style={{ fontSize: currentSize.fontSize }}>
                        EDURA
                    </Heading>
                )}
            </Flex>
        </Link>
    );
} 