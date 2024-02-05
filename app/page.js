"use client";
import React, { Suspense, useEffect, useRef } from "react";
import styles from "./page.module.css";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Model } from "@/assets/3D-Model/Scene";
import { Canvas } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";

export default function Home() {
  gsap.registerPlugin(ScrollTrigger);

  const boxRef = useRef(null);
  const boxRef2 = useRef(null);
  const boxRef3 = useRef(null);
  const boxRef4 = useRef(null);
  const text = useRef(null);
  const text2 = useRef(null);

  useEffect(() => {
    if (boxRef.current) {
      gsap.to(boxRef.current, {
        x: 500,
        scrollTrigger: {
          trigger: "#test2",
          start: "top top",
          end: "+=300",
          scrub: true,
          markers: true,
        },
      });
    }

    if (boxRef2.current) {
      gsap.to(boxRef2.current, {
        x: -500,
        scrollTrigger: {
          trigger: "#test2",
          start: "top top",
          end: "+=300",
          scrub: true,
          markers: true,
        },
      });
    }

    if (boxRef3.current) {
      gsap.to(boxRef3.current, {
        x: +700,
        scrollTrigger: {
          trigger: "#test3",
          start: "top top",
          end: "+=100",
          scrub: true,
          markers: true,
        },
      });
    }

    if (boxRef4.current) {
      gsap.to(boxRef4.current, {
        x: -700,
        y: 100,
        scrollTrigger: {
          trigger: "#test3",
          start: "top top",
          end: "+=100",
          scrub: true,
          markers: true,
        },
      });
    }

    if (text.current) {
      gsap
        .timeline({
          scrollTrigger: {
            trigger: "#test4",
            endTrigger: "#test5",
            start: "top=+300 top",
            end: "bottom bottom",
            scrub: true,
          },
        })
        .to(text.current, { x: -1000 })
        .to(text.current, { x: 100 });
    }

    if (text2.current) {
      gsap
        .timeline({
          scrollTrigger: {
            trigger: "#test4",
            endTrigger: "#test5",
            start: "top=+300 top",
            end: "bottom bottom",
            scrub: true,
            markers: true,
          },
        })
        .to(text2.current, { x: 1000 })
        .to(text2.current, { x: 100 });
    }
  }, []);

  return (
    <main>
      {/* Sección 1 */}

      <div id="mobile" className={styles.container_mobile}>
        <Canvas camera={{ fov: 20 }}>
          <ambientLight intensity={1.25} />
          <directionalLight position={0.4} />
          <Suspense fallback={null}>
            <Model />
          </Suspense>
        </Canvas>
      </div>

      <section id="test" className={styles.section}></section>

      {/* Sección 2 */}
      <section id="test2" className={styles.section2}>
        <div className={styles.box} ref={boxRef}></div>
        <div className={styles.box} ref={boxRef2}></div>
      </section>

      {/* Sección 3 */}
      <section id="test3" className={styles.section3}>
        <div className={styles.box} ref={boxRef3}></div>

        <div className={styles.box2} ref={boxRef4}></div>
      </section>

      {/* Sección 4 */}
      <section id="test4" className={styles.section4}>
        <span ref={text} className={styles.span}>
          lorem ipsum dolor sit amet, consectdolor dolor sectdolorectdolorit
          amet, consectdolor
        </span>
        <span ref={text2} className={styles.span2}>
          lorem ipsum dolor olor sit amet, consectdolor dolor
          sectdolorectdolorit amet, consectdolor amet, consectetur adip
        </span>
      </section>

      <section className={styles.section5}></section>
    </main>
  );
}
