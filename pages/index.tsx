import { METADATA } from '../constants'
import Head from 'next/head'
import { useEffect } from 'react';

import Layout from '@/components/common/layout'
import Header from '@/components/common/header'
import Menu from '@/components/common/menu'
import ProgressIndicator from '@/components/common/progress-indicator'
import Cursor from '@/components/common/cursor'
import Hero from '@/components/home/hero';
import Projects from '@/components/home/projects';
import Quote from '@/components/home/quote';

let isDesktop;

export default function Home() {

  useEffect(() => {
    isDesktop = (typeof window.orientation === 'undefined') && (navigator.userAgent.indexOf('IEMobile') === -1);
    window.scrollTo({top: 0});
  }, [isDesktop]);

  return (
    <>
      <Head>
        <title>{METADATA.title}</title>
      </Head>
      <Layout>
        <ProgressIndicator></ProgressIndicator>
        <Header>
          <Menu></Menu>
        </Header>
        <Cursor isDesktop></Cursor>
        <main className='flex-col flex gap-y-28'>
          <div className='fixed top-0 left-0 h-screen w-screen bg-gray-900 -z-1'></div>
          <Hero></Hero>
          <Projects isDesktop></Projects>
          <Quote></Quote>
        </main>
      </Layout>
    </>
  )
}
