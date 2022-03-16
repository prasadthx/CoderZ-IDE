import { ProSidebar, SidebarHeader, SidebarFooter, SidebarContent, Menu, MenuItem, SubMenu } from 'react-pro-sidebar';
import react, {useState} from 'react';
import 'react-pro-sidebar/dist/css/styles.css';
import {IoLogoAngular, IoLogoAndroid} from "react-icons/io";
import {RiArrowLeftCircleFill} from "react-icons/ri";
import {FcOpenedFolder} from 'react-icons/fc'

const FileSidebar = () => {
    const [collapsed, setCollapsed] = useState(true)
    return (
        <ProSidebar className={'text-white'} collapsed={collapsed}>
            <SidebarHeader className={'inline-flex items-center justify-evenly'}>
                {
                    collapsed ? (
                        <FcOpenedFolder onClick={()=>setCollapsed(false)} className={'cursor-pointer text-2xl'} />
                    ) : (
                        <>
                            <h1> Folder Name </h1>
                            <RiArrowLeftCircleFill onClick={() => setCollapsed(true)} className={'cursor-pointer text-2xl'} />
                        </>
                    )
                }
            </SidebarHeader>
            <SidebarContent>
                {/**
                 *  You can add the content of the sidebar ex: menu, profile details, ...
                 */}
                <Menu iconShape="square">
                    <MenuItem icon={<IoLogoAndroid />}>Dashboard</MenuItem>
                    <SubMenu title="Components" icon={<IoLogoAngular />}>
                        <MenuItem>Component 1</MenuItem>
                        <MenuItem>Component 2</MenuItem>
                    </SubMenu>
                </Menu>
            </SidebarContent>
            <SidebarFooter>
                {/**
                 *  You can add a footer for the sidebar ex: copyright
                 */}
            </SidebarFooter>
        </ProSidebar>
    )
}

export default FileSidebar;