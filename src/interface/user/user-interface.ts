/*
 * @Descripttion: 
 * @Author: taoman
 * @Date: 2021-01-04 13:35:45
 * @LastEditors: taoman
 * @LastEditTime: 2021-01-05 15:29:00
 */
export namespace UserInterface{
export interface Index {
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
  }
  
  interface Content {
    name: string;
    desc: string[];
  }
  
  interface Header {
    title: string;
    subtitle: string;
  }
  
export interface Banner {
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
    twitter: string;
    linkedin: string;
  }
}