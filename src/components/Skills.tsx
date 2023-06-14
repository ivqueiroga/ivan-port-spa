import React, {useState, useEffect} from 'react';
import './Skills.css';
import rawData from '../utils/data';

function Skills() {
  const { icons } = rawData;
  const [skillSet, setSkillSet] = useState<any[]>([]);
  const [activeSkill, setActiveSkill] = useState({
    name: '',
    active: false,
    text: '',
  });

  useEffect(() => {
    const arr: any = []
    icons?.map((prevState) => arr.push(({...prevState, active: false})));
    setSkillSet(arr);
  },[icons])

  const skillHandler = (e: string) => {
    const active = skillSet.filter((skill) => skill.name === e);
    skillSet.map((skill) => { 
      if (skill.name !== e) {
        return skill.active = false;
      } else return skill.active = !skill.active;
    });
    setActiveSkill(active[0]);
  }

  const renderIcon = (e:any) => {
    const Icon = e.icon;
    return (
      <button className={e.active ? 'icon active-icon' : 'icon'} key={e.name} onClick={() => skillHandler(e.name)} name={e.name}>
        <Icon size={30}/>
        <p>{e.name}</p>
        <input type="checkbox" name={e.name} checked={e.active} readOnly />
      </button>
    );}
  
  
  return (
    <div className='skills-container' id='skills'>
      <h2>- Habilidades -</h2>
      <div className='skills-zone'>
        <div className='icons-zone'>
          {skillSet?.map((e) => renderIcon(e))}
        </div>
        <div className='text-zone'>
          <h3 className='text-title'>{activeSkill.name.length > 0 ? activeSkill.name : ''}</h3>
          <p className='text'>{activeSkill.name.length > 0 ? activeSkill.text : 'Clique em uma Habilidade para ter um resumo de uma frase'}</p>
        </div>
      </div>
    </div>
  )
}

export default Skills