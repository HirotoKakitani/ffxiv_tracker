import React from 'react';
import {useDispatch} from 'react-redux';
import {setCharacterData} from '../app/characterSlice';
import { Link } from 'react-router-dom';
import axios from 'axios';

const serverList = ["Adamantoise","Aegis","Alexander","Anima","Asura","Atomos","Bahamut",
    "Balmung","Behemoth","Belias","Brynhildr","Cactuar","Carbuncle","Cerberus","Chocobo",
    "Coeurl","Diabolos","Durandal","Excalibur","Exodus","Faerie","Famfrit","Fenrir","Garuda",
    "Gilgamesh","Goblin","Gungnir","Hades","Hyperion","Ifrit","Ixion","Jenova","Kujata","Lamia",
    "Leviathan","Lich","Louisoix","Malboro","Mandragora","Masamune","Mateus","Midgardsormr","Moogle",
    "Odin","Omega","Pandaemonium","Phoenix","Ragnarok","Ramuh","Ridill","Sargatanas","Shinryu",
    "Shiva","Siren","Tiamat","Titan","Tonberry","Typhon","Ultima","Ultros","Unicorn","Valefor",
    "Yojimbo","Zalera","Zeromus","Zodiark","Spriggan","Twintania","HongYuHai","ShenYiZhiDi",
    "LaNuoXiYa","HuanYingQunDao","MengYaChi","YuZhouHeYin","WoXianXiRan","ChenXiWangZuo",
    "BaiYinXiang","BaiJinHuanXiang","ShenQuanHen","ChaoFengTing","LvRenZhanQiao","FuXiaoZhiJian",
    "Longchaoshendian","MengYuBaoJing","ZiShuiZhanQiao","YanXia","JingYuZhuangYuan","MoDuNa",
    "HaiMaoChaWu","RouFengHaiWan","HuPoYuan"];
// Use case for useCallback: https://www.robinwieruch.de/react-usecallback-hook/
// if the callback function is passed in to this component as a prop, then this component will
// rerender every time the parent rerenders, even if this component doesnt rely on any values from 
// parent. This is because when the parent rerenders, the function definitions (passed in callback) 
// also gets redefined. This component sees the redefined function, and rerenders even when it doesn't
// need to. 
const CharacterSearch = () => {
  const dispatch = useDispatch();
  const characterDataHandler = () => {
    // TODO "No character data loaded briefly shows when searching"
    const name = document.getElementById('ffxiv_name_input').value; 
    const world = document.getElementById('ffxiv_world_input').value;
    const queryArgs = {
      params: {
        name: name,
        server: world,
      }
    };
    axios.get('https://xivapi.com/character/search', queryArgs).then((response) => {
      const characterData = {
        id: response.data.Results[0].ID,
        name: response.data.Results[0].Name,
        avatarUrl: response.data.Results[0].Avatar,
      }
      dispatch(setCharacterData(characterData));
    });
  };
  return (
    <div className="container border border-dark border-2 bg-darkmid ">
      <div className="row bg-dark">
        <h1>Search</h1>
      </div>
      <div className="form-row d-flex align-items-end flex-wrap gap-3 p-5">
        <div className="col-md m1">
          <label htmlFor="ffxiv_name_input" className="form-label">Character Name</label>
          <input name="charName" type="text" className="form-control bg-light text-dark" id="ffxiv_name_input"></input>
        </div>
        <div className="col-md m1">
          <label htmlFor="ffxiv_world_input" className="form-label" >World</label>
          <select name="charWorld" className="form-select bg-light text-dark form-control" id="ffxiv_world_input">
            {serverList.map(server => <option value={server} key={server}>{server}</option>)}
          </select>
        </div>
        <Link className="btn btn-primary" to="/character" onClick={characterDataHandler}>Search</Link>
      </div>
    </div>
  );
};

export default CharacterSearch;
