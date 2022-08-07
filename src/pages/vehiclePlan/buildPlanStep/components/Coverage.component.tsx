import React, { useState, useContext } from 'react'
import { CoverageContext } from '@/context/CoverageContext'
import IconTheft from '@/assets/icons/icon_theft.svg'
import IconChoque from '@/assets/icons/icon_choque.svg'
import IconPerdida from '@/assets/icons/icon_perdidatotal.svg'
import IconUp from '@/assets/icons/icon_up.svg'
import IconDown from '@/assets/icons/icon_down.svg'
import './coverage.scss'

const data = [
    {
        key: 1,
        title: 'PROTEGE A TU AUTO',
        listContent: [
            {
                key: 1,
                icon: IconTheft,
                title: 'Llanta robada',
                desc: 'He salido de casa a las cuatro menos cinco para ir a la academia de ingles de mi pueblo (Sant Cugat, al lado de Barcelona) con mi bici, na llego a la academia que está en el centro del pueblo en una plaza medio-grande y dejo donde siempre la bici atada con una pitón a un sitio de esos de poner las bicis y mucho más',
                price: 15
            },
            {
                key: 2,
                icon: IconChoque,
                title: 'Choque y/o pasarte la luz roja ',
                desc: 'He salido de casa a las cuatro menos cinco para ir a la academia de ingles de mi pueblo (Sant Cugat, al lado de Barcelona) con mi bici, na llego a la academia que está en el centro del pueblo en una plaza medio-grande y dejo donde siempre la bici atada con una pitón a un sitio de esos de poner las bicis y mucho más',
                price: 20
            },
            {
                key: 3,
                icon: IconPerdida,
                title: 'Atropello en la vía Evitamiento ',
                desc: 'He salido de casa a las cuatro menos cinco para ir a la academia de ingles de mi pueblo (Sant Cugat, al lado de Barcelona) con mi bici, na llego a la academia que está en el centro del pueblo en una plaza medio-grande y dejo donde siempre la bici atada con una pitón a un sitio de esos de poner las bicis y mucho más',
                price: 50
            }
        ]
    },
    {
        key: 2,
        title: 'PROTEGE A LOS QUE TE RODEAN',
        listContent: []
    },
    {
        key: 3,
        title: 'MEJORA TU PLAN',
        listContent: []
    }
]

interface IListContent {
    key: number;
    icon: any;
    title: string;
    desc: string;
    price: number;
}

interface IItemData {
    key: number;
    title: string;
    listContent: IListContent[];
}

export const CoverageComponent = () => {
    const [selected, setSelected] = useState(1);
    const dataFinded = data.find((item) => item.key === selected) || { listContent: [] }; 
    const { coverage, setCoverage } = useContext(CoverageContext);

    return (
        <div className='coverage'>
            <h1> Agrega o quita coberturas </h1>
            <div className='coverage_list_header'>
                {
                    data.map((item) => <HeaderList item={item} active={selected === item.key} setSelected={setSelected} key={item.key}/>)
                }
            </div>
            <div className='coverage_list_body'>
                {
                    dataFinded.listContent?.map((item) => <BodyList coverage={coverage} setCoverage={setCoverage} item={item} key={item.key}/>)
                }
            </div>
        </div>
    )
}

/* */

interface IHeaderList {
    item:IItemData;
    setSelected: (sectionSelected:number) => any;
    active: boolean;
}

const HeaderList = ({item, active, setSelected}: IHeaderList) => {

    return (
        <div className={`header_item ${active ? 'header_item--active' : ''}`} onClick={() => setSelected(item.key)}>
            <p>{item.title}</p>
        </div>
    )
}

interface IBodyList {
    item:IListContent;
    coverage: any[];
    setCoverage: (data:any) => any;
}

const BodyList = ({ item, coverage, setCoverage }:IBodyList) => {
    const [show, setShow] = useState(false);
    const coverageIsSelected = coverage.find((itemCoverage) => itemCoverage.key === item.key) ? true : false; 
    return(
        <>
            <div className='body_item'>
                <div className='body_item_title'>
                    <div className='body_item_icon'>
                        <img src={item.icon} alt={item.title} />
                    </div>
                    <div className='body_item_desc'>
                        <h1>{item.title}</h1>
                        <div className='asigned' onClick={() => setCoverage({ key: item.key, price: item.price })}>
                            <div> <span> {coverageIsSelected ? '-' : '+' } </span> </div> 
                            <p> {coverageIsSelected ? 'QUITAR' : 'AGREGAR' } </p> 
                        </div>
                    </div>
                    <div className='body_item_arrows'>
                        {
                            show ? 
                            <img src={IconUp} alt='icon up' onClick={() => setShow(false)} />
                                :
                            <img src={IconDown} alt='icon down' onClick={() => setShow(true)} />
                        }
                    </div>
                </div>
                <div className='body_item_content'>
                    {
                        show &&
                        <p> { item.desc } </p>
                    }
                </div>

            </div>
            <hr />
        </>
    )
}