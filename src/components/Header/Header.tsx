"use client";

import './Header.css';
import Link from 'next/link';
import { useState } from 'react';
import { Flex, Drawer } from "antd";
import { MenuOutlined } from '@ant-design/icons';
import Logo from "@/components/Logo";
import MyButton from "@/components/UI/MyButton";
import { getMainMenuPages } from "@/config/pages.config";

export default function Header() {
    const [drawerVisible, setDrawerVisible] = useState(false);
    const mainMenuPages = getMainMenuPages();

    const showDrawer = () => {
        setDrawerVisible(true);
    };

    const closeDrawer = () => {
        setDrawerVisible(false);
    };

    const handleMenuClick = () => {
        closeDrawer();
    };

    return (
        <Flex className="navbar" align={"center"} justify={"center"}>
            <Flex className="navbar__container" align={"center"} justify={"space-between"}>
                {/* Mobile Menu Icon - показывается только в мобильном режиме */}
                <div className="navbar__menu-icon" onClick={showDrawer}>
                    <MenuOutlined style={{ fontSize: '24px', color: '#0f2239' }} />
                </div>

                {/* Logo - скрывается в мобильном режиме */}
                <div className="navbar__logo navbar__logo--desktop">
                    <Logo size="medium" />
                </div>

                {/* Desktop Menu */}
                <ul className="navbar__links navbar__links--desktop">
                    {mainMenuPages.map((page) => (
                        <li key={page.href}>
                            <Link href={page.href}>{page.name.toUpperCase()}</Link>
                        </li>
                    ))}
                    <li><Link href="#language">RU</Link></li>
                </ul>

                {/* Desktop Login Button */}
                <div className="navbar__actions navbar__actions--desktop">
                    <Link href="/login">
                        <MyButton primary>
                            LOGIN/REGISTER
                        </MyButton>
                    </Link>
                </div>

                {/* Mobile Drawer */}
                <Drawer
                    placement="left"
                    closable={true}
                    onClose={closeDrawer}
                    open={drawerVisible}
                    width={280}
                    className="navbar__drawer"
                >
                    <div className="navbar__drawer-content">
                        {/* Logo в центре содержимого drawer */}
                        <div className="navbar__drawer-logo">
                            <Logo size="medium" />
                        </div>

                        <ul className="navbar__drawer-menu">
                            {mainMenuPages.map((page) => (
                                <li key={page.href}>
                                    <Link href={page.href} onClick={handleMenuClick}>
                                        {page.name}
                                    </Link>
                                </li>
                            ))}
                            <li>
                                <Link href="#language" onClick={handleMenuClick}>
                                    RU
                                </Link>
                            </li>
                        </ul>
                        
                        <div className="navbar__drawer-actions">
                            <Link href="/login" onClick={handleMenuClick}>
                                <MyButton primary style={{ width: '100%' }}>
                                    LOGIN/REGISTER
                                </MyButton>
                            </Link>
                        </div>
                    </div>
                </Drawer>
            </Flex>
        </Flex>
    );
} 