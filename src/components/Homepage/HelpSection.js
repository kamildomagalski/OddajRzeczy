import React, {useState} from 'react';
import decoration from '../../assets/Decoration.svg'
import Foundations from "../Foundations";
import Organization from "../Organization";
import Locals from "../Locals";

function HelpSection() {
  
  
  const [isFoundationsVisible, setFoundationsVisible] = useState(true)
  const [isOrganizationsVisible, setOrganizationsVisible] = useState(false)
  const [isLocalsVisible, setLocalsVisible] = useState(false)
  
  
  const handleFoundationVisible = () => {
    return (
      setFoundationsVisible(true),
        setOrganizationsVisible(false),
        setLocalsVisible(false)
    )
  }
  const handleOrganizationVisible = () => {
    return (
      setFoundationsVisible(false),
        setOrganizationsVisible(true),
        setLocalsVisible(false)
    )
  }
  const handleLocalsVisible = () => {
    return (
      setFoundationsVisible(false),
        setOrganizationsVisible(false),
        setLocalsVisible(true)
    )
  }
  
  
  return (
    <section className={'help'} id={'help'}>
      <div className={'container'}>
        <h2 className={'help__title'}>Komu pomagamy?</h2>
        <img className={'decoration'} src={decoration} alt={'decoration'}/>
        <div className={'help__receiversGroups'}>
          <button className={isFoundationsVisible
            ? 'btn btn-big btn-receivers active'
            : 'btn btn-big btn-receivers'} onClick={handleFoundationVisible}>Fundacjom
          </button>
          
          <button className={isOrganizationsVisible
            ? 'btn btn-big btn-receivers active'
            : 'btn btn-big btn-receivers'} onClick={handleOrganizationVisible}>Organizacjom pozarządowym
          </button>
          
          <button className={isLocalsVisible
            ? 'btn btn-big btn-receivers active'
            : 'btn btn-big btn-receivers'} onClick={handleLocalsVisible}>Lokalnym zbiórkom
          </button>
        
        </div>
        
        <Foundations isFoundationsVisible={isFoundationsVisible}/>
        <Organization isOrganizationsVisible={isOrganizationsVisible}/>
        <Locals isLocalsVisible={isLocalsVisible}/>
      
      </div>
    </section>
  );
}

export default HelpSection;