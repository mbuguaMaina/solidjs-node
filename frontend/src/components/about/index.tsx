
import { Link, Title } from '@solidjs/meta';
import type { Component } from 'solid-js';

const about: Component = ()=> {
    return (
        <>
            <Title>About page | solid</Title>
            <Link rel="canonical" href="http://solidjs.com/" /> 
            <meta name="description" content="cool" />
            <meta name="keywords" content="cool, best" />
          <h1>About page</h1>
        </>
      
    
    )
} 

export default about