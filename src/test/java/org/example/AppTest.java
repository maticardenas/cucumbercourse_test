package org.example;

import static org.junit.Assert.assertTrue;

import org.junit.Test;

/**
 * Unit test for simple App.
 */
public class AppTest 
{
    /**
     * Rigorous Test :-)
     */
    @Test
    public void shouldAnswerWithTrue()
    {
        assertTrue( true );
    }


    public static void main(String[] args) {
      try{
          System.out.println("A");
          badMethod();
          System.out.println("B");
      }catch(Exception ex){
          System.out.println("C");
      }finally{
          System.out.println("D");
      }

    }

    public static void badMethod(){
        throw new Error();
    }
}
