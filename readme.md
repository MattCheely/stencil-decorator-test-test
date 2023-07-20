# Broken Unit Tests With Decorator Example

This repo demonstrates a using a [basic TS decorator](src/utils/log-decorator.ts)
in [a component](src/components/my-component/my-component.tsx). In stencil v4
it's impossible to unit test this component, as Jest fails with an error:

```
 ● Test suite failed to run

    ReferenceError: _logResize_decorators is not defined



      at src/components/my-component/my-component.tsx:145:25
      at Object.<anonymous> (src/components/my-component/my-component.tsx:147:3)
      at Object.<anonymous> (src/components/my-component/my-component.spec.ts:2:1)
```
