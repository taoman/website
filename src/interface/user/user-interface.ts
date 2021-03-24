/*
 * @Descripttion: 
 * @Author: taoman
 * @Date: 2021-01-04 13:35:45
 * @LastEditors: taoman
 * @LastEditTime: 2021-03-24 14:35:17
 */
export namespace UserInterface{
export interface UserIndex {
    data: IndexData[];
  }
  
export interface IndexData{
    title: string;
    social: Social;
    banner: Banner;
    modules: Module[];
  }
  
  interface Module {
    display: boolean;
    anchor: Anchor;
    header: Header;
    content?: Content;
    keys?: Keys;
    cards?: Header[];
    blog?: string;
    rss?: string;
  }
  
  interface Keys {
    '主页': string;
    '博客':string;
  }
  
  interface Content {
    name: string;
    desc: string[];
    md:string
  }
  
  interface Header {
    title: string;
    subtitle: string;
    md ?:string
  }
  
  interface Banner {
    anchor: Anchor;
    title: string;
    desc: string[];
  }
  
  interface Anchor {
    id: string;
    icon: string;
    name: string;
  }
  
  interface Social {
    github: string;
  }

  export  interface ConfigIndex {
    status: number;
    mesg: string;
    data: ConfigDate[];
  }
  
export interface ConfigDate {
    id: number;
    key: string;
    value: string;
  }
}