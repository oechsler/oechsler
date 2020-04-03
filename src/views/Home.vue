<template>
  <div class="home">
    <Overscroll message="Ich liebe dich Melli &hearts;" />
    <Hero :background="thumbOverview">
      <Elevator />
    </Hero>
    <Page anchor="about" :inverted="false">
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
    <Page :background="thumbPlank" />
    <Page>
      <Projects>
        <Project
          :thumbnail="projectAzureblob"
          title="Azure Blob"
          description="Library used for abstraction of Azure Blob Storage in my golang projects."
        >
          <ProjectTag language="Go" icon="go-plain" />
          <ProjectTag language="GitHub" icon="github-plain" />
        </Project>
        <Project
          :thumbnail="projectDotfiles"
          title="Dotfiles"
          description="Automatic install and maintainance of user configs and packages."
        >
          <ProjectTag language="Shell" icon="linux-plain" />
          <ProjectTag language="GitHub" icon="github-plain" />
        </Project>
        <Project
          :thumbnail="projectBaresharp"
          title="Bare Sharp"
          description="Cross-Platform 2d sprite framework living on top of MonoGame."
        >
          <ProjectTag language="C#" icon="csharp-plain" />
          <ProjectTag language="GitHub" icon="github-plain" />
        </Project>
      </Projects>
    </Page>
    <Footer />
  </div>
</template>

<script lang="ts">
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

import thumbOverview from "@/assets/thumb-overview.jpg";
import thumbPlank from "@/assets/thumb-plank.jpg";

import projectAzureblob from "@/assets/project-azureblob.jpg";
import projectDotfiles from "@/assets/project-dotfiles.jpg";
import projectBaresharp from "@/assets/project-baresharp.jpg";

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
    Overscroll
  }
})
export default class Home extends Vue {
  readonly thumbOverview: string = thumbOverview;
  readonly thumbPlank: string = thumbPlank;

  readonly projectAzureblob: string = projectAzureblob;
  readonly projectDotfiles: string = projectDotfiles;
  readonly projectBaresharp: string = projectBaresharp;
}
</script>
