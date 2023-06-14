import React, {useState, useEffect} from 'react';
import './Skills.css';
import rawData from '../utils/data';
import { ISkill } from '../Interface/Interface';

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
  },[icons]);

  const skillHandler = (e: string) => {
      return skillSet.map((skill) => { 
      if (skill.name !== e) {
        return skill.active = false;
      } else {
        skill.active = true;
        return (setActiveSkill({
          name: skill.name,
          active: skill.active,
          text: skill.text,
        }));
      };
    });
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

  const renderText  = ():ISkill | undefined => {
    const skill = skillSet.filter((skill) => skill.active === true);
    if (skill.length > 0) {
      const {active, name, text} = skill[0]
      return {active, name, text};
    } else return undefined;
  }
  
  
  return (
    <div className='skills-container' id='skills'>
      <h2>- Habilidades -</h2>
      <div className='skills-zone'>
        <div className='icons-zone'>
          {skillSet?.map((e) => renderIcon(e))}
        </div>
        <div className='text-zone'>
          <h3 className='text-title'>{renderText()? renderText()?.name : ''}</h3>
          <p className='text'>{renderText()? renderText()?.text : ''}</p>
        </div>
      </div>
    </div>
  )
}

export default Skills