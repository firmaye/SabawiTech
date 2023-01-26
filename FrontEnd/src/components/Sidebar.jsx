import { faPencil } from '@fortawesome/free-solid-svg-icons';
import { useEffect, useRef, useState } from 'react';
import '../css/sidebar.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

const sidebarNavItems = [
    {
        display: 'Add Project',
        icon: <FontAwesomeIcon icon={faPencil} />
    },
    {
        display: 'Select template',
        icon: <FontAwesomeIcon icon={faPencil} />,

    },
    {
        display: 'Add details',
        icon: <FontAwesomeIcon icon={faPencil} />,

    },
    {
        display: 'Preview',
        icon: <FontAwesomeIcon icon={faPencil} />,

    },
    {
        display: 'Orders',
        icon: <FontAwesomeIcon icon={faPencil} />,

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
