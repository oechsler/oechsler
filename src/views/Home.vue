<template>
  <div class="home">
    <Overscroll message="Ich liebe dich Melli &hearts;" />
    <Hero
      :background="thumbOverview"
      :scroll="scrollOffset"
      :inverted="darkmodeModule.isEnabled"
    >
      <template #navigation>
        <Navigation>
          <NavigationItem href="#about">About me.</NavigationItem>
          <NavigationItem href="#projects">Recent Projects.</NavigationItem>
        </Navigation>
      </template>
      <template #elevator>
        <Elevator />
      </template>
    </Hero>
    <Page anchor="about" :inverted="darkmodeModule.isEnabled">
      <TwoColumn>
        <template #left>
          <About>
            <template #about>
              <strong>I'm a computer science student</strong> at
              Baden-Wuerttemberg Cooperative State University in Karlsruhe and
              work for medialesson GmbH in Pforzheim. During my spare time I
              like to create awesome apps, of which you can find a selection
              below, other stuff can be found on my GitHub.
            </template>
            <template #technologies>
              <Devicon icon="vuejs-plain" />
              <Devicon icon="react-original" />
              <Devicon icon="sass-original" />
              <Devicon icon="typescript-original" />
              <Devicon icon="csharp-line" />
              <Devicon icon="go-plain" />
              <Devicon icon="swift-plain" />
              <Devicon icon="docker-plain" />
            </template>
          </About>
        </template>
        <template #right>
          <Contact
            name="Samuel Oechsler"
            street="Spichernstraße"
            :number="22"
            zip="75173"
            city="Pforzheim"
            email="you@oechsler.it"
            phone="0176 81751229"
          />
        </template>
      </TwoColumn>
    </Page>
    <Page :background="thumbPlank" :inverted="darkmodeModule.isEnabled" />
    <Page anchor="projects" :inverted="darkmodeModule.isEnabled">
      <Projects>
        <Project
          :thumbnail="projectBaresharp"
          title="Bare++"
          description="Native reimplementation of my cross-platform 2d sprite framework."
          href="https://github.com/oechsler/Bare"
        >
          <ProjectTag language="WIP" />
          <ProjectTag language="C++" icon="csharp-plain" />
          <ProjectTag language="GitHub" icon="github-plain" />
        </Project>
        <Project
          :thumbnail="projectCozy"
          title="Cozy"
          description="A snugly hosting platform that delivers cloud services for the rest of us."
          href="https://github.com/cozy-hosting"
        >
          <ProjectTag language="C#" icon="csharp-plain" />
          <ProjectTag language="Vue" icon="vuejs-plain" />
          <ProjectTag language="GitHub" icon="github-plain" />
        </Project>
        <Project
          :thumbnail="projectDotfiles"
          title="Dotfiles"
          description="Automatic install and maintenance of user configs and packages."
          href="https://github.com/oechsler/dotfiles"
        >
          <ProjectTag language="Shell" icon="linux-plain" />
          <ProjectTag language="GitHub" icon="github-plain" />
        </Project>
      </Projects>
    </Page>
    <Footer :inverted="darkmodeModule.isEnabled" />
  </div>
</template>

<script lang="ts">
import "reflect-metadata";
import { Component, Vue } from "vue-property-decorator";
import Overscroll from "@/components/Overscroll.vue";
import About from "@/components/About.vue";
import Contact from "@/components/Contact.vue";
import Devicon from "@/components/Devicon.vue";
import Elevator from "@/components/Elevator.vue";
import Hero from "@/components/Hero.vue";
import Page from "@/components/Page.vue";
import Projects from "@/components/Projects.vue";
import Project from "@/components/Project.vue";
import ProjectTag from "@/components/ProjectTag.vue";
import TwoColumn from "@/components/TwoColumn.vue";
import Footer from "@/components/Footer.vue";
import Navigation from "@/components/Navigation.vue";
import NavigationItem from "@/components/NavigationItem.vue";

import thumbOverview from "@/assets/thumb-overview.jpg";
import thumbPlank from "@/assets/thumb-plank.jpg";

import projectBaresharp from "@/assets/project-baresharp.jpg";
import projectCozy from "@/assets/project-cozy.jpg";
import projectDotfiles from "@/assets/project-dotfiles.jpg";
import Darkmode from "../store/darkmode";
import { getModule } from "vuex-module-decorators";

@Component({
  components: {
    Hero,
    Elevator,
    About,
    Contact,
    Devicon,
    Page,
    TwoColumn,
    Projects,
    Project,
    ProjectTag,
    Footer,
    Overscroll,
    Navigation,
    NavigationItem
  }
})
export default class Home extends Vue {
  private readonly thumbOverview: string = thumbOverview;
  private readonly thumbPlank: string = thumbPlank;

  private readonly projectCozy: string = projectCozy;
  private readonly projectDotfiles: string = projectDotfiles;
  private readonly projectBaresharp: string = projectBaresharp;

  private darkmodeModule?: Darkmode;

  private scrollTop = 0;

  private get scrollOffset() {
    return this.scrollTop * 0.2;
  }

  public created() {
    this.darkmodeModule = getModule(Darkmode, this.$store);
  }

  public mounted() {
    window.addEventListener("scroll", this.onScroll, { passive: true });
  }

  public beforeDestroy() {
    window.removeEventListener("scroll", this.onScroll);
  }

  private onScroll() {
    const element = document.documentElement;
    this.scrollTop =
      (window.pageYOffset || element.scrollTop) - (element.clientTop || 0);
  }
}
</script>
