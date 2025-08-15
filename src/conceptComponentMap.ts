
import { lazy } from "react";

export const conceptComponentMap: Record<string, React.LazyExoticComponent<React.FC>> = {
  'functional-components': lazy(() => import("./pages/01-functional-components/FunctionalComponent")),
  'class-components': lazy(() => import("./pages/02-class-components/ClassComponent")),
  'state-hooks': lazy(() => import("./pages/03-state-hooks/StateHookComponent")),
  'effect-hooks': lazy(() => import("./pages/04-effect-hooks/EffectHookComponent")),
  'context-api': lazy(() => import("./pages/05-context-api/ContextApiComponent")),
  'routing': lazy(() => import("./pages/06-routing/RoutingComponent")),
  'forms': lazy(() => import("./pages/07-forms/FormsComponent")),
  'lifting-state-up': lazy(() => import("./pages/08-lifting-state-up/LiftingStateUpComponent")),
  'refs': lazy(() => import("./pages/09-refs/RefsComponent")),
  'error-boundaries': lazy(() => import("./pages/10-error-boundaries/ErrorBoundariesComponent")),
  'portals': lazy(() => import("./pages/11-portals/PortalsComponent")),
  'memoization': lazy(() => import("./pages/12-memoization/MemorizationComponent")),
  'fragments': lazy(() => import("./pages/13-fragments/FragmentComponent")),
  'children-props': lazy(() => import("./pages/14-children-props/ChildrenPropsComponent")),
  'hoc': lazy(() => import("./pages/15-high-order-components/HighOrderComponent")),
  'render-props': lazy(() => import("./pages/16-render-props/RenderPropsComponent")),
  'suspense-lazy-loading': lazy(() => import("./pages/17-suspense-and-lazy-loading/SuspenseAndLaxyLoadingComponent")),
  'testing': lazy(() => import("./pages/18-testing/TestingComponent")),
  'custom-hooks': lazy(() => import("./pages/19-hooks-custom/CustomHookComponent")),
  'profiler-api': lazy(() => import("./pages/20-profiler/ProfileComponent")),
  'strict-mode': lazy(() => import("./pages/22-strict-mode/StrictModeComponent")),
  'error-handling-hooks': lazy(() => import("./pages/23-error-handling-hooks/ErrorHandlingComponent")),
};
