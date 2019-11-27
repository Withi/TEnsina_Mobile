import {StyleSheet, Dimensions} from 'react-native';
import {metrics, colors} from '~/styles';

const heightScreen = Dimensions.get('window').height;
console.log('heightScreen', heightScreen);

export const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  scrollView: {
    flexGrow: 1,
    marginBottom: 0,
    margin: metrics.baseMargin,
    justifyContent: 'space-between',
  },
  slide: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  imgSlide: {
    height: '100%',
    width: '100%',
    borderRadius: metrics.baseRadius * 8,
  },
  text: {
    color: '#fff',
    fontSize: 30,
    fontWeight: 'bold',
  },
  viewSwipe: {
    height: heightScreen <= 700 ? 140 : 200,
    justifyContent: 'flex-start',
    borderRadius: metrics.baseRadius * 8,
  },
  viewBlog: {
    marginTop: metrics.baseMargin,
    backgroundColor: colors.grayMain,
    borderRadius: metrics.baseRadius * 8,
    height: heightScreen <= 700 ? 170 : 200,
    justifyContent: 'center',
  },
  viewTextTitle: {
    alignItems: 'center',
    marginTop: metrics.baseMargin,
  },
  txtTitle: {
    fontWeight: 'bold',
    fontSize: 16,
    color: colors.secundary,
  },
  viewTextDescription: {
    alignItems: 'center',
    marginTop: metrics.baseMargin - 8,
  },
  txtDescription: {
    fontSize: 13,
  },
  viewPhoto: {
    flex: 1,
    flexDirection: 'row',
    marginLeft: metrics.baseMargin,
    marginRight: metrics.baseMargin,
    marginTop: metrics.baseMargin - 5,
  },
  touchImage: {
    width: '33%',
    alignItems: 'center',
    justifyContent: 'center',
  },
  imgBlog: {
    height: heightScreen <= 700 ? 60 : 90,
    width: heightScreen <= 700 ? 60 : 90,
    borderRadius: metrics.baseRadius * 15,
  },
  txtDescriptionImg: {
    fontSize: 10,
    textAlign: 'center',
    marginTop: metrics.baseMargin - 7,
    padding: 5,
    textTransform: 'uppercase',
  },
  viewParceiro: {
    marginBottom: metrics.baseMargin * 4,
    margin: metrics.baseMargin,
    borderRadius: metrics.baseRadius * 8,
    height: 70,
    justifyContent: 'flex-end',
  },
  viewTextTitleParceiro: {
    alignItems: 'center',
  },
  viewImgParceiro: {
    flexDirection: 'row',
  },
  imgParceiro: {
    width: 50,
    height: 50,
    marginLeft: metrics.baseMargin * 2,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
