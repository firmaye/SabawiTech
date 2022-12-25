import { useEffect, useRef, useState } from 'react';
import '../css/sidebar.css';

const sidebarNavItems = [
    {
        display: 'Add Project',
        icon: <i className='fa fa-pencil'></i>
    },
    {
        display: 'Select template',
        icon: <i className='fa fa-pencil'></i>,

    },
    {
        display: 'Add details',
        icon: <i className='fa fa-pencil'></i>,

    },
    {
        display: 'Preview',
        icon: <i className='fa fa-pencil'></i>,

    },
    {
        display: 'Orders',
        icon: <i className='fa fa-pencil'></i>,

    },
]

const Sidebar = () => {
    const [activeIndex, setActiveIndex] = useState(0);
    const [stepHeight, setStepHeight] = useState(0);


    useEffect(() => {
        setTimeout(() => {

        }, 50);
    }, []);

    // change active index


    return <div className='add-portifolio-sidebar'>

        <div className="add-portifolio-sidebar__menu">
            <div

                className="add-portifolio-sidebar__menu__indicator"

            ></div>
            {
                sidebarNavItems.map((item, index) => (

                    <div className={`add-portifolio-sidebar__menu__item `}>
                        <div className="add-portifolio-sidebar__menu__item__icon">
                            {item.icon}
                        </div>
                        <div className="add-portifolio-sidebar__menu__item__text">
                            {item.display}
                        </div>
                    </div>

                ))
            }
        </div>
    </div>;
};

export default Sidebar;
