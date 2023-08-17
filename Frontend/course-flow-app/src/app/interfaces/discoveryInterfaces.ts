import * as d3 from "d3";

/*******************************************************************************************************************************
 * Discovery JSON Data Types.
 *******************************************************************************************************************************/

export interface IDiscoveryJsonUnitData {
    id: object;
    code: string;
    title: string;
    description: string;
    constraints: Array<IDiscoveryJsonUnitContraintData>;
}

export interface IDiscoveryJsonUnitContraintData {
    type: string;
    units: Array<string>;
}

/*******************************************************************************************************************************
 * Discovery Hierarchical Unit Data Types.
 *******************************************************************************************************************************/

export interface IDiscoveryHierarchicalData {
    id: string;
    name: string;
    description: string;
    group: string;
    children: IDiscoveryHierarchicalData[];
}

export interface IDiscoveryNodeData extends d3.SimulationNodeDatum {
    id: string;
    name: string;
    group: number;
    nodeLabelType: string;
    description: string;
}

export interface IDiscoveryLinkData extends d3.SimulationLinkDatum<d3.SimulationNodeDatum>{
    source: string | number | IDiscoveryNodeData;
    target: string | number | IDiscoveryNodeData;
    lineLabelType: string;
    distance: number;
}


/*******************************************************************************************************************************
 * Graph Properties Data Types
 *******************************************************************************************************************************/

export interface IDiscoveryGraphProperties {
    width: number;
    height: number;
    iniitialCanvasTranslationOffsetX: number;
    iniitialCanvasTranslationOffsetY: number;
    initialZoomScale: number;
    forceManyBodyStrength: Record<string, number>;
    linkStrength: Record<string, number>;
    linkDistance: Record<string, number>;
    zoomLevelProperties: Record<string, IDiscoveryGraphZoomLevelProperties>;
}

export interface IDiscoveryGraphZoomLevelProperties {
    linkWidth: Record<string, number>;
    linkOpacity: Record<string, number>;
    nodeRadius: Record<string, number>;
    nodeColor: Record<string, string>;
    textColor: Record<string, string>;
    textFontSize: Record<string, number>;
    textFontWieight: Record<string, number>;
    textXOffset: Record<string, number>;
    textYOffset: Record<string, number>;
}

export interface IDiscoveryColorData {
    [key: number]: string;
}

export interface ILabelProperties {
    x: number;
    y: number;
    fontSize: string;
  }

export interface IMapProperties {
    
    windowSizePropertiesSizes: IWindowSizePropertiesSizes;
    maxZoomOutAmount: number;
    maxZoomInAmount: number;
    canvasColor: string;
    canvasBorderRadius: string;
    lineOpacity: number;
}

export interface IWindowSizePropertiesSizes {

    [key: string]: IWindowSizeProperties;
}

export interface IWindowSizeProperties {
    canvasWidth: number;
    canvasHeight: number;
    nodeDistance: number;
    clusterForce: number;
    fieldNodeRadius: number;
    specializationNodeRadius: number;
    unitNodeRadius: number;
    unitLabelProperties: ILabelProperties,
    specializationLabelProperties: ILabelProperties,
    fieldLabelProperties: ILabelProperties
}
  
