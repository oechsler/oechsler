<template>
  <div class="home">
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
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import About from "../components/About.vue";
import Contact from "../components/Contact.vue";
import Devicon from "../components/Devicon.vue";
import Elevator from "../components/Elevator.vue";
import Hero from "../components/Hero.vue";
import Page from "../components/Page.vue";
import Projects from "../components/Projects.vue";
import TwoColumn from "../components/TwoColumn.vue";

import thumbOverview from "@/assets/thumb-overview.jpg";
import thumbPlank from "@/assets/thumb-plank.jpg";

@Component({
  components: {
    Hero,
    Elevator,
    About,
    Contact,
    Devicon,
    Page,
    TwoColumn,
    Projects
  }
})
export default class Home extends Vue {
  readonly thumbOverview: string = thumbOverview;
  readonly thumbPlank: string = thumbPlank;
}
</script>
